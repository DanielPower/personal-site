<script lang="ts">
	type Size = "original" | "fullwidth" | "thumbnail";
	export let src: string;
	export let alt: string;
	export let size: Size = "fullwidth";

	let resizeSlug = "";
	switch (size) {
		case "original":
			resizeSlug = "";
			break;
		case "fullwidth":
			resizeSlug = "960x0/";
			break;
		case "thumbnail":
			resizeSlug = "320x0/";
			break;
	}
</script>

<figure>
	<a href={`https://thumbor.danielpower.ca/unsafe/${src}`}>
		<img
			src={`https://thumbor.danielpower.ca/unsafe/${resizeSlug}filters:format(webp)/${src}`}
			{alt}
		/>
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
