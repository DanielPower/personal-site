// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://danielpower.ca",
  integrations: [mdx(), sitemap(), icon()],

  adapter: node({
    mode: "standalone",
  }),
});

