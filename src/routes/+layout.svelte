<script>
	import "prism-themes/themes/prism-nord.min.css";
	import { page } from "$app/stores";
	const menuItems = [
		{ title: "Home", url: "/" },
		{ title: "Blog", url: "/blog" },
		{
			title: "Resume",
			url: "https://github.com/DanielPower/resume/raw/master/resume.pdf",
		},
		{ title: "GitHub", url: "https://www.github.com/danielpower" },
		{ title: "Contact", url: "mailto:me@danielpower.ca" },
	];
</script>

<header>
	<dan>Daniel Power</dan>
	<nav>
		{#each menuItems as menuItem}
			<a class:active={menuItem.url === $page.route.id} href={menuItem.url}
				>{menuItem.title}</a
			>
		{/each}
	</nav>
</header>
<slot />

<style>
	dan {
		font-size: 2rem;
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
</style>
