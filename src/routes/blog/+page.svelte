<script lang="ts">
	import type { Post } from "../../../types";
	import Chip from "$lib/components/Chip.svelte";

	export let data;

	const years: Map<
		string,
		{ months: Map<string, { days: Map<string, Post[]> }> }
	> = new Map();

	$: data.posts.forEach((post) => {
		const [yyyy, mm, dd] = post.date.split("-");
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

<div class="container">
	<div>
		<h3>Tags</h3>
		<div class="tags">
			{#each data.tags as tag}
				<div class="tag">
					<a data-sveltekit-reload href={`?tags=${tag.label}`}>
						<Chip label={tag.label} color={tag.color} />
					</a>
				</div>
			{/each}
		</div>
	</div>
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
											{post.title}
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
</div>

<style>
	.container {
		display: flex;
		gap: 2rem;
	}
	.tags {
		width: 12rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.tag:hover {
		filter: saturate(2) brightness(1.25);
	}
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
