import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import node from "@astrojs/node";
import shikiTheme from "./shiki.json";
import { immichIntegration } from "./src/integrations/immich";

export default defineConfig({
  site: "https://danielpower.ca",
  integrations: [mdx(), sitemap(), icon(), immichIntegration],
  trailingSlash: "never",
  markdown: { shikiConfig: { theme: shikiTheme } },
  adapter: node({ mode: "standalone" }),
});
