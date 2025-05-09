import { PROMETHEUS_URL } from "astro:env/server";

export type PromMetric = Record<string, string>;
export type PromValue = [number | string, string];
export type PromResult = { metric: PromMetric; value: PromValue };
export type PromData = { data?: { result?: PromResult[] } };

export interface ClusterNodeData {
  name: string;
  status: string;
  kubeletVersion: string;
  osImage: string;
  totalMemoryGiB: string;
  usedMemoryGiB: string;
  memoryUsagePercent: number;
  cpuUsagePercent: number;
  uptime: string;
  uptimeSeconds: number;
}

export async function fetchPrometheusData(query: string): Promise<PromData> {
  const response = await fetch(`${PROMETHEUS_URL}/api/v1/query?query=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error(`Failed to fetch: ${query}`);
  return await response.json();
}

export function promMap(
  data: PromData,
  keyFn: (metric: PromMetric) => string,
  valFn: (value: PromValue, metric: PromMetric) => any
) {
  return Object.fromEntries(
    (data.data?.result || []).map(({ metric, value }) => [
      keyFn(metric),
      valFn(value, metric),
    ])
  );
}

export function bytesToGiB(bytes: number): string {
  return (bytes / (1024 * 1024 * 1024)).toFixed(2);
}

export function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  const parts = [
    days > 0 ? `${days}d` : null,
    hours > 0 ? `${hours}h` : null,
    `${minutes}m`
  ].filter(Boolean);
  
  return parts.join(' ');
}

export const prometheusQueries = {
  nodeInfo: 'kube_node_info',
  nodeStatus: 'kube_node_status_condition{condition="Ready",status="true"}',
  memoryTotal: 'node_memory_MemTotal_bytes',
  memoryAvailable: 'node_memory_MemAvailable_bytes',
  cpuUsage: '100 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[1m]) * 100)',
  uptime: 'node_time_seconds - node_boot_time_seconds'
};

export async function fetchClusterData(): Promise<{ nodes: ClusterNodeData[], error: string | null }> {
  let clusterNodes: ClusterNodeData[] = [];
  let error: string | null = null;

  try {
    const results = await Promise.all(Object.values(prometheusQueries).map(fetchPrometheusData));
    const [nodeInfoData, nodeStatusData, memoryTotalData, memoryAvailableData, cpuUsageData, uptimeData] = results;
    
    const nodeInfo = nodeInfoData.data?.result || [];
    const nodeStatus = promMap(nodeStatusData, m => m.node, v => Number(v[1]) > 0);
    const memoryTotal = promMap(memoryTotalData, m => m.instance.split(':')[0], v => Number(v[1]));
    const memoryAvailable = promMap(memoryAvailableData, m => m.instance.split(':')[0], v => Number(v[1]));
    const cpuUsage = promMap(cpuUsageData, m => m.instance.split(':')[0], v => Number(Number(v[1]).toFixed(1)));
    const uptime = promMap(uptimeData, m => m.instance.split(':')[0], v => Number(v[1]));

    clusterNodes = nodeInfo.map((item) => {
      const nodeName = item.metric?.node || "Unknown";
      const nodeReady = nodeStatus[nodeName];
      const instanceName = item.metric?.internal_ip || nodeName;
      
      const totalMemoryBytes = memoryTotal[instanceName] || 0;
      const availableMemoryBytes = memoryAvailable[instanceName] || 0;
      const usedMemoryBytes = totalMemoryBytes - availableMemoryBytes;
      
      const totalMemoryGiB = bytesToGiB(totalMemoryBytes);
      const usedMemoryGiB = bytesToGiB(usedMemoryBytes);
      const memoryUsagePercent = totalMemoryBytes ? Math.round((usedMemoryBytes / totalMemoryBytes) * 100) : 0;

      const uptimeSeconds = uptime[instanceName] || 0;
      const formattedUptime = formatUptime(uptimeSeconds);
          
      return {
        name: nodeName,
        status: nodeReady ? "Ready" : "NotReady",
        kubeletVersion: item.metric?.kubelet_version || "Unknown",
        osImage: item.metric?.os_image || "Unknown",
        totalMemoryGiB,
        usedMemoryGiB,
        memoryUsagePercent,
        cpuUsagePercent: parseFloat(cpuUsage[instanceName] || 0),
        uptime: formattedUptime,
        uptimeSeconds
      };
    });
  } catch (e) {
    error = e instanceof Error ? `Prometheus data error: ${e.message}` : "Failed to fetch node data from Prometheus";
    console.error("Error processing Prometheus data:", e);
  }

  return { nodes: clusterNodes, error };
}
