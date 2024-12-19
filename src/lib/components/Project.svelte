<script lang="ts">
	import Image from "$lib/components/Image.svelte";
	import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa";
	export let title: string;
	export let links: { name: string; url: string; icon: IconDefinition }[];
	export let image: string | undefined = undefined;
</script>

<div class="project">
	{#if image}
		<div class="thumb">
			<Image src={image} alt="Screenshot of {title}" />
		</div>
	{/if}
	<h1>{title}</h1>
	<slot />
	<div class="links">
		{#each links as { name, url, icon }}
			<a href={url}>
				<Fa fw {icon} />
				{name}
			</a>
		{/each}
	</div>
</div>

<style>
	.project {
		padding: 0.5rem;
		background-color: var(--color-dark);
		border-radius: 0.5rem;
	}

	h1 {
		margin-top: 0;
		width: fit-content;
	}

	.links {
		margin-top: 0.75rem;
		display: flex;
		flex-direction: column;
	}

	.thumb {
		float: right;
		width: 300px;
		padding-left: 1rem;
	}

	@media (max-width: 600px) {
		.thumb {
			float: none;
			width: auto;
			padding-left: 0;
		}
	}
</style>
