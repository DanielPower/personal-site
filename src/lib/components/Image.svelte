<script lang="ts">
	export let src: string;
	export let alt: string;
	const path = `/src/lib/assets/${src}`;
	const thumbnail = import.meta.glob<{ default: string }>("$lib/assets/*", {
		query: "?full",
		eager: true,
	})[path]?.default!;
</script>

<figure>
	<a href={path}>
		<img src={thumbnail} {alt} />
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
