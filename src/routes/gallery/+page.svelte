<script lang="ts">
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
	let { photos } = data;
</script>

<div class="gallery">
	{#each photos as photo}
		<a href={`/gallery/${photo.split("/").at(-1)}`}>
			<img src={photo} alt={photo} />
		</a>
	{/each}
</div>

<style>
	.gallery {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.gallery img {
		width: 300px;
	}
</style>
