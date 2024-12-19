<script lang="ts">
	import "prism-themes/themes/prism-xonokai.min.css";
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Snow from "$lib/components/Snow.svelte";
</script>

<Snow />
<div class="container">
	<div class="topbar">
		<span class="name">Daniel Power</span>
		<Navbar />
	</div>
	<div class="content">
		<slot />
	</div>
	<Footer />
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
		gap: 1rem;
		flex-grow: 1;
	}

	.name {
		font-size: 1.5rem;
	}

	.topbar {
		display: flex;
		align-items: end;
		line-height: 1;
		gap: 1rem;
	}

	@media (max-width: 650px) {
		.topbar {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
