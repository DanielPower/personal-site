<script lang="ts">
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
	let { photo, exif } = data;
	import Lightbox from "$lib/components/Lightbox.svelte";
	console.log({ exif });
</script>

{#if photo}
	<a href="/gallery">
		<Lightbox
			src={photo}
			alt={photo}
			metadata={[
				{
					title: "Camera",
					value: `${exif.Make || "Unknown"} ${data.exif.Model || "Unknown"}`,
				},
				{
					title: "Lens",
					value: `${exif.SubExif.LensMake || "Unknown"} ${data.exif.SubExif.LensModel || ""}`,
				},
				{
					title: "Shutter",
					value: `${exif.SubExif.ShutterSpeedValue || "Unknown"}`,
				},
				{
					title: "Aperture",
					value: `${exif.SubExif.ApertureValue === "NaN" ? `F${data.exif.SubExif.ApertureValue}` : "Unknown"}`,
				},
				{
					title: "ISO",
					value: `${exif.SubExif.PhotographicSensitivity || "Unknown"}`,
				},
			]}
		/>
	</a>
{/if}
