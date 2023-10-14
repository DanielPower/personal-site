<script lang="ts">
	import type { Post } from '../../../types';

	export let data: {
		posts: Post[];
	};
</script>

<div>
	{#each data.posts as post}
		<div>
			{post.metadata.date}
			<a href={`blog/${post.file}`}>
				{post.metadata.title}
			</a>
		</div>
	{/each}
</div>
