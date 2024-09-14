<script lang="ts">
	export let src: string;
	export let alt: string;
	export let metadata: Array<{ title: string; value: string }>;
</script>

<div class="lightbox">
	<div class="image">
		<img {src} {alt} />
	</div>
	<div class="metadata">
		{#each metadata as { title, value }}
			<div class="property">
				<h3>{title}</h3>
				<p>{value}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		overflow: auto; /* Allow scrolling if content overflows */
	}
	.image {
		flex-grow: 1;
	}
	.lightbox img {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain; /* Ensure the image scales down while maintaining aspect ratio */
	}
	.metadata {
		padding: 1rem;
		width: 300px;
		flex-shrink: 0;
		height: 100%;
		overflow-y: auto; /* Allow scrolling for metadata if necessary */
		color: white;
	}
	.property {
		margin-bottom: 1rem;
	}

	/* Responsive adjustments for vertical screens */
	@media (orientation: portrait) {
		.lightbox {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
		.metadata {
			width: 100%;
			height: auto;
		}
		.image {
			flex-grow: 0;
			width: 100%;
		}
	}
</style>
