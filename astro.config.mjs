// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src",
  site: "http://localhost:4321/",

  //update
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
