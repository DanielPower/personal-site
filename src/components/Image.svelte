<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<figure>
	<img {src} {alt} />
	{#if $$slots.default}
		<figcaption><slot /></figcaption>
	{/if}
</figure>

<style>
	figure {
		max-width: 40rem;
	}
	img {
		display: block;
		max-width: 100%;
	}
</style>
