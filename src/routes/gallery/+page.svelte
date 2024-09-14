<script lang="ts">
	import type { PageServerData } from "./$types";
	import Lightbox from "$lib/components/Lightbox.svelte";
	export let data: PageServerData;
	const photos = import.meta.glob<{ default: string }>("$lib/photos/**", {
		query: "?w=310",
		eager: true,
	});
</script>

<div class="gallery">
	{#each Object.keys(photos) as photo}
		<a href={`/gallery/?photo=${photo.split("/").at(-1)}`}>
			<img src={photos[photo].default} alt={photo} />
		</a>
	{/each}
</div>

{#if data.photo}
	<a href="/gallery">
		<Lightbox
			src={`/src/lib/photos/${data.photo}`}
			alt={data.photo}
			metadata={[
				{
					title: "Camera",
					value: `${data.exif.Make || "Unknown"} ${data.exif.Model || "Unknown"}`,
				},
				{
					title: "Lens",
					value: `${data.exif.SubExif.LensMake || "Unknown"} ${data.exif.SubExif.LensModel || ""}`,
				},
				{
					title: "Shutter",
					value: `${data.exif.SubExif.ShutterSpeedValue || "Unknown"}`,
				},
				{
					title: "Aperture",
					value: `${data.exif.SubExif.ApertureValue === "NaN" ? `F${data.exif.SubExif.ApertureValue}` : "Unknown"}`,
				},
				{
					title: "ISO",
					value: `${data.exif.SubExif.PhotographicSensitivity || "Unknown"}`,
				},
			]}
		/>
	</a>
{/if}

<style>
	.gallery {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
