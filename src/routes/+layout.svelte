<script lang="ts">
	import 'prism-themes/themes/prism-nord.min.css';
	import { page } from '$app/stores';

	const menuItems = [
		{ title: 'About', url: '/' },
		{ title: 'Blog', url: '/blog' },
		{ title: 'Projects', url: '/projects' },
		{ title: 'Resume', url: '/resume' }
	];
</script>

<div class="container">
	<div class="topbar">
		<span class="name">Daniel Power</span>
		<nav>
			{#each menuItems as menuItem}
				<a class:active={menuItem.url === $page.route.id} href={menuItem.url}>{menuItem.title}</a>
			{/each}
		</nav>
	</div>
	<div class="content">
		<slot />
	</div>
	<footer>Copyright © 2023, Daniel Power</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		padding: var(--gutter) 0 var(--gutter) 0;
		margin: 0 auto 0 auto;
		gap: 1rem;
		max-width: var(--content-width);
		transition: ease all 0.25s;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex-grow: 1;
	}

	.name {
		font-size: 1.5rem;
	}

	.topbar {
		display: flex;
		align-items: end;
		gap: 1rem;
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	nav .active {
		font-weight: 700;
	}

	footer {
		text-align: center;
	}

	@media print {
		nav {
			display: none;
		}
	}

	@media (max-width: 650px) {
		.topbar {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
