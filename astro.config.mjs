import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import node from "@astrojs/node";
import shikiTheme from "./shiki.json";
import { init } from "@immich/sdk";

init({
  baseUrl: "https://photos.danielpower.ca/api",
  apiKey: import.meta.env.IMMICH_API_KEY,
});

export default defineConfig({
  site: "https://danielpower.ca",
  integrations: [mdx(), sitemap(), icon()],
  trailingSlash: "never",
  markdown: { shikiConfig: { theme: shikiTheme } },
  adapter: node({ mode: "standalone" }),
});
