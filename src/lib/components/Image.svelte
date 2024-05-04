<script lang="ts">
	export let src: string;
	export let alt: string;
	const path = `/src/lib/assets/${src}`;
	const original = import.meta.glob<{ default: string }>("$lib/assets/*", {
		eager: true,
	})[path]?.default!;
	const thumbnail = import.meta.glob<{ default: string }>("$lib/assets/*", {
		query: "?w=960&format=webp&quality=80",
		eager: true,
	})[path]?.default!;
</script>

<figure>
	<a href={original}>
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
