import adapter from "@sveltejs/adapter-node";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import remarkFootnotes from "remark-footnotes";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"],
			remarkPlugins: [remarkFootnotes],
		}),
	],
	extensions: [".svelte", ".md"],
	kit: {
		adapter: adapter(),
	},
};

export default config;
