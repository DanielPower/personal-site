<script lang="ts">
	export let data;
</script>

{#each data.posts as post}
	<div>
		{post.meta.date}
		<a href={post.path}>
			{post.meta.title}
		</a>
	</div>
{/each}
