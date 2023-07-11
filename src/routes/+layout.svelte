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

<header>Daniel Power</header>
<nav>
	{#each menuItems as menuItem}
		<a class:active={menuItem.url === $page.route.id} href={menuItem.url}>{menuItem.title}</a>
	{/each}
</nav>
<div>
	<slot />
</div>
<footer>Copyright © 2023, Daniel Power</footer>

<style>
	header {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	nav {
		display: flex;
		gap: 1rem;
		width: 300px;
		margin: 1rem 0 1rem 0;
	}

	nav .active {
		font-weight: 700;
	}

	footer {
		text-align: center;
		margin: 1rem 0 1rem 0;
	}

	@media print {
		nav {
			display: none;
		}
	}
</style>
