<script lang="ts">
	const photos = import.meta.glob<{ default: string }>("$lib/photos/**", {
		query: "?w=320",
		eager: true,
	});
</script>

<div class="gallery">
	{#each Object.keys(photos) as photo}
		<a href={`/gallery/${photo.split("/").at(-1)}`}>
			<img src={photos[photo].default} alt={photo} />
		</a>
	{/each}
</div>

<style>
	.gallery {
		width: 100%;
		display: flex;
		gap: 1rem;
	}
</style>
