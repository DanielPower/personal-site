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
	<header>Daniel Power</header>
	<nav>
		{#each menuItems as menuItem}
			<a class:active={menuItem.url === $page.route.id} href={menuItem.url}>{menuItem.title}</a>
		{/each}
	</nav>
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

	header {
		font-size: 2rem;
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
</style>
