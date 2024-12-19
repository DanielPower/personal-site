<script lang="ts">
	type Size = "original" | "fullwidth" | "thumbnail";
	export let src: string;
	export let alt: string;
	export let size: Size = "fullwidth";

	const path = `/src/lib/assets/${src}`;

	const images: { [key in Size]: string } = {
		original: import.meta.glob<{ default: string }>("$lib/assets/**", {
			eager: true,
		})[path]?.default!,
		thumbnail: import.meta.glob<{ default: string }>("$lib/assets/**", {
			query: "?w=320&format=webp&quality=80",
			eager: true,
		})[path]?.default!,
		fullwidth: import.meta.glob<{ default: string }>("$lib/assets/**", {
			query: "?w=960&format=webp&quality=80",
			eager: true,
		})[path]?.default!,
	};
</script>

<figure>
	<a href={images.original}>
		<img src={images[size]} {alt} />
	</a>
	{#if $$slots.default}
		<figcaption><slot /></figcaption>
	{/if}
</figure>

<style>
	img {
		display: block;
		max-width: 100%;
	}

	figure {
		max-width: 40rem;
	}

	figcaption {
		font-size: 0.8em;
		background-color: var(--color-dark);
		padding: 0.25rem;
		color: var(--color-fg);
	}
</style>
