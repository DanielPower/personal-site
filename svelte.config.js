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
  compilerOptions: {
    warningFilter: (warning) => !warning.code === "a11y_media_has_captions",
    css: "injected",
  },
  extensions: [".svelte", ".md"],
  kit: {
    adapter: adapter(),
  },
};

export default config;
