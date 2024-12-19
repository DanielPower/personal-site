<script>
	export let data;
</script>

<div class="post-heading">
	<h1>{data.title}</h1>
	<div>
		<p>Published on: {data.date}</p>
	</div>
</div>
{@html data.body}

<style>
	.post-heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
