import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  site: "https://www.aadesina.com",
  integrations: [react(), tailwind()],
});
