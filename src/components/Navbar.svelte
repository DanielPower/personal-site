<script lang="ts">
	import { page } from '$app/stores';
	const menuItems = [
		{ title: 'About', url: '/' },
		{ title: 'Blog', url: '/blog' },
		{ title: 'Projects', url: '/projects' },
		{ title: 'Resume', url: '/resume' }
	];
</script>

<nav>
	{#each menuItems as menuItem}
		<a class:active={menuItem.url === $page.route.id} href={menuItem.url} data-text={menuItem.title}
			>{menuItem.title}</a
		>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		gap: 1rem;
	}

	nav a {
		position: relative;
		text-align: center;
	}

	nav a.active {
		visibility: hidden;
	}

	nav a::after {
		content: attr(data-text);
		position: absolute;
		visibility: hidden;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		font-weight: 700;
	}

	nav a.active::after {
		visibility: visible;
	}

	@media print {
		nav {
			display: none;
		}
	}
</style>
