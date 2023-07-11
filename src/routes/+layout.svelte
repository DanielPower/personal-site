<script lang="ts">
	import 'prism-themes/themes/prism-nord.min.css';
	import {page} from '$app/stores';

	const menuItems = [
        {title: 'About', url: '/'},
        {title: 'Blog', url: '/blog'},
        {title: 'Projects', url: '/projects'},
        {title: 'Resume', url: '/resume'},
    ];
</script>

<layout>
    <header>
        <dan>Daniel Power</dan>
        <nav>
            {#each menuItems as menuItem}
                <a class:active={menuItem.url === $page.route.id} href={menuItem.url}>{menuItem.title}</a>
            {/each}
        </nav>
    </header>
    <content>
        <slot/>
    </content>
    <footer>Copyright © 2023, Daniel Power</footer>
</layout>

<style>
    layout {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
    }

    header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    dan {
        font-size: 2rem;
    }

    nav {
        display: flex;
        gap: 1rem;
        width: 300px;
    }

    nav .active {
        font-weight: 700;
    }

    content {
        height: 100%;
        flex-grow: 1;
    }

    footer {
        margin: 0 auto 0 auto;
    }

    @media print {
        nav {
            display: none;
        }
    }
</style>
