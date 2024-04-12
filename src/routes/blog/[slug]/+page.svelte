<script>
	import Chip from "$lib/components/Chip.svelte";
	export let data;
</script>

<h1>{data.title}</h1>
<div>
	<p>Published on: {data.date}</p>
	<div class="tags">
		{#each data.tags as { label, color }}
			<Chip {label} {color} />
		{/each}
	</div>
</div>
{@html data.content}

<style>
	h1 {
		margin-bottom: 0;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
