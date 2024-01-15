import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkFootnotes from 'remark-footnotes';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: { blog: 'src/routes/blog/post.svelte' },
			remarkPlugins: [remarkFootnotes]
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	}
};

export default config;
