<script lang="ts">
	import { env } from "$env/dynamic/public";
	import Image from "$lib/components/Image.svelte";
</script>

<ul>
	<li>
		<a
			href="https://grafana.danielpower.ca/d/bdw8kjl3hrxmob/public-dashboard?orgId=1&refresh=30s&from=1734488039077&to=1734491639077"
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
