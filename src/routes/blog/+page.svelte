<script lang="ts">
	import type { Post } from '../../../types';

	export let data: {
		posts: Post[];
	};
</script>

{#each data.posts as post}
	<div>
		{post.metadata.date}
		<a href={post.path}>
			{post.metadata.title}
		</a>
	</div>
{/each}
