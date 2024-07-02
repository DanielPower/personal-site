<script lang="ts">
	import { env } from "$env/dynamic/public";
	import Image from "$lib/components/Image.svelte";
</script>

This page is being served by {env.PUBLIC_NODE_NAME} in my homelab Kubernetes cluster.
Try refreshing the page to see if you get a different node.

<Image
	src={`nodes/${env.PUBLIC_NODE_NAME}.png`}
	alt={env.PUBLIC_NODE_NAME || "Unknown node"}
/>
