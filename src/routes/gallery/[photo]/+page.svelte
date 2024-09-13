<script lang="ts">
	import Fa from "svelte-fa";
	import type { PageServerData } from "./$types";
	import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

	export let data: PageServerData;
	const { photo, exif } = data;
	const compressedUrl = import.meta.glob<{ default: string }>(
		`$lib/photos/**`,
		{
			query: `?w=960&format=webp&quality=80`,
			eager: true,
		},
	)[`/src/lib/photos/${photo}`]?.default;
	const originalUrl = import.meta.glob<{ default: string }>(`$lib/photos/**`, {
		eager: true,
	})[`/src/lib/photos/${photo}`]?.default;
</script>

<div class="header">
	<a href="/gallery"><Fa icon={faArrowLeft} scale={1.25} /></a>
	<h1>{photo}</h1>
</div>
<a href={originalUrl}>
	<img class="photo" src={compressedUrl} alt={photo} />
</a>
<div class="metadata">
	<div class="row">
		<div class="property">
			<h3>Camera</h3>
			<p>{exif.Make || "Unknown"} {exif.Model || "Unknown"}</p>
		</div>
	</div>
	<div class="row">
		<div class="property">
			<h3>Lens</h3>
			<p>{exif.SubExif.LensMake || "Unknown"} {exif.SubExif.LensModel || ""}</p>
		</div>
	</div>
	<div class="row">
		<div class="property">
			<h3>Shutter</h3>
			<p>{exif.SubExif.ShutterSpeedValue || "Unknown"}</p>
		</div>
		<div class="property">
			<h3>Aperture</h3>
			<p>
				{exif.SubExif.ApertureValue === "NaN"
					? `F${exif.SubExif.ApertureValue}`
					: "Unknown"}
			</p>
		</div>
		<div class="property">
			<h3>ISO</h3>
			<p>{exif.SubExif.PhotographicSensitivity || "Unknown"}</p>
		</div>
	</div>
</div>

<style>
	.header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.metadata {
		width: 300px;
	}
	.row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
	.photo {
		width: 100%;
		flex-shrink: 1;
		min-width: 0;
	}
	img {
		width: 100%;
		display: block;
	}
</style>
