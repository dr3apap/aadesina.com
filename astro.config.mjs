import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  site: "https://www.aadesina.com",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: "server",
  adapter: netlify()
});