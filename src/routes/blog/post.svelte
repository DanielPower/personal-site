<script>
	/** @type {string} **/
	export let title;
	/** @type {string} **/
	export let date;
</script>

<h1>{title}</h1>
<p>published: {date}</p>
<slot />
