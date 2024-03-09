<script>
	export let data;
</script>

<h1>{data.title}</h1>
<p>Published on: {data.date}</p>
{@html data.content}
