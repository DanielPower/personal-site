<script lang="ts">
	import type { Post } from '../../../types';

	export let data: {
		posts: Post[];
	};

	console.log(data.posts);
	const years: Map<string, { months: Map<string, { days: Map<string, Post[]> }> }> = new Map();
	data.posts.forEach((post) => {
		const [yyyy, mm, dd] = post.metadata.date.split('-');
		const month = new Date(0, parseInt(mm, 10) - 1).toLocaleString('default', { month: 'long' });
		if (!years.has(yyyy)) {
			years.set(yyyy, { months: new Map() });
		}
		const months = years.get(yyyy)?.months!;
		if (!months.has(month)) {
			months.set(month, { days: new Map() });
		}
		const days = months.get(month)?.days!;
		if (!days.has(dd)) {
			days.set(dd, []);
		}
		const day = days.get(dd)!;
		day.push(post);
	});

	console.log(years);
</script>

<div>
	{#each years.entries() as [year, { months }]}
		{#each months.entries() as [month, { days }], monthIndex}
			<div class="month">
				<h3 class="month-header">
					<span>{month}</span>
					{#if monthIndex === 0}<span>{year}</span>{/if}
				</h3>
				{#each days.entries() as [day, posts]}
					<div>
						{day}
						{#each posts as post}
							<a href={`blog/${post.file}`}>
								{post.metadata.title}
							</a>
						{/each}
					</div>
				{/each}
			</div>
		{/each}
	{/each}
</div>

<style>
	.month-header {
		display: flex;
		justify-content: space-between;
	}

	.month {
		margin-bottom: 1rem;
	}
</style>
