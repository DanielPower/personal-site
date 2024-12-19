<script>
	export let data;
</script>

<svelte:head>
	{@html data.head}
</svelte:head>
<div class="post-heading">
	<h1>{data.title}</h1>
	<div>
		<p>Published on: {data.date}</p>
	</div>
</div>
<div class="post-body">
	{@html data.body}
</div>

<style>
	.post-heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}

	.post-body :global(h2) {
		margin-top: 1.5rem;
	}
	.post-body :global(h3) {
		margin-top: 1rem;
	}
	.post-body :global(figure) {
		margin-top: 1rem;
	}
</style>
