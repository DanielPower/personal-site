<script lang="ts">
	import { env } from "$env/dynamic/public";
	import Image from "$lib/components/Image.svelte";
</script>

<ul>
	<li>
		<a
			href="https://grafana.danielpower.ca/public-dashboards/e65981fffdbf4a129b23fd0e8e51b879?orgId=1&refresh=30s"
			>Grafana Dashboard</a
		>
	</li>
	<li><a href="https://status.danielpower.ca">Uptime Monitoring</a></li>
</ul>

<p>
	This page is being served by <span class="node">{env.PUBLIC_NODE_NAME}</span>
	in my homelab Kubernetes cluster.
</p>

<p>If you refresh, you might get a different node! 🔄</p>

<div class="node-image">
	<Image
		src={`nodes/${env.PUBLIC_NODE_NAME}.png`}
		alt={env.PUBLIC_NODE_NAME || "Unknown node"}
	/>
</div>

<style>
	.node-image {
		margin-top: 0.5rem;
	}

	.node {
		font-weight: bold;
	}
</style>
