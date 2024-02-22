<script lang="ts">
	export let src: string;
	export let alt: string;

	const imagePromise = import(`$lib/assets/${src}.jpg`);
	const thumbPromise = import(`$lib/assets/${src}.jpg?w=960&format=webp`);
</script>

{#await Promise.all([imagePromise, thumbPromise])}
	<p>Loading...</p>
{:then [image, thumb]}
	{console.log(image)}
	<figure>
		<a href={image.default}>
			<img src={thumb.default} {alt} />
		</a>
		{#if $$slots.default}
			<figcaption><slot /></figcaption>
		{/if}
	</figure>
{/await}

<style>
	figure {
		max-width: 40rem;
	}
	img {
		display: block;
		max-width: 100%;
	}
</style>
