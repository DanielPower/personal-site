<script lang="ts">
	export let thumb: string;
	export let src: string;
	export let alt: string;
</script>

<figure>
	<a href={src}>
		<img src={thumb} {alt} />
	</a>
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
