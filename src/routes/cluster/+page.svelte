<script lang="ts">
	import Image from "$lib/components/Image.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

This page is being served by {data.hostname} in my homelab Kubernetes cluster. Try
refreshing the page to see if you get a different node.

<Image src={`nodes/${data.hostname}.png`} alt={data.hostname} />
