<script lang="ts">
	const collections = import.meta.glob<{
		default: { title: string; date: string };
	}>("$lib/gallery/*/collection.json", {
		eager: true,
	});
</script>

{#each Object.values(collections) as collection}
	<a href={`/gallery/${collection}`}
		><div class="collection">
			<div class="row">
				<h2>{collection.default.title}</h2>
				<p>{collection.default.date}</p>
			</div>
		</div>
	</a>
{/each}

<style>
	.collection {
		background-color: #a1b8e3;
	}
	.row {
		display: flex;
		justify-content: space-between;
	}
</style>
