import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import node from "@astrojs/node";

import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://danielpower.ca",
  integrations: [mdx(), sitemap(), icon(), svelte()],
  vite: {
    assetsInclude: ["**/*.gb"],
  },
  adapter: node({
    mode: "standalone",
  }),
});