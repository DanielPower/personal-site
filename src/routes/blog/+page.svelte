<script lang="ts">
	import type { Post } from "../../../types";

	export let data: {
		posts: Post[];
	};

	const years: Map<
		string,
		{ months: Map<string, { days: Map<string, Post[]> }> }
	> = new Map();
	data.posts.forEach((post) => {
		const [yyyy, mm, dd] = post.meta.date.split("-");
		const month = new Date(0, parseInt(mm, 10) - 1).toLocaleString("default", {
			month: "long",
		});
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
</script>

<div>
	{#each years.entries() as [year, { months }]}
		{#each months.entries() as [month, { days }], monthIndex}
			<div class="month">
				<h3>
					{month}
					{#if monthIndex === 0}{year}{/if}
				</h3>
				{#each days.entries() as [day, posts]}
					<div>
						<div class="day">
							<div class="day-number">
								{day}
							</div>
							<div class="posts">
								{#each posts as post}
									<a href={`blog/${post.slug}`}>
										{post.meta.title}
									</a>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	{/each}
</div>

<style>
	.month {
		margin-bottom: 1rem;
	}

	.day {
		display: flex;
		gap: 0.5rem;
	}

	.day-number {
		width: 1.5rem;
		text-align: right;
	}

	.posts {
		display: flex;
		flex-direction: column;
	}
</style>
