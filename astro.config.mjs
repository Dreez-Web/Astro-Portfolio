// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Dreez-Web.github.io",
  adapter: vercel({ imageService: true }),
  integrations: [tailwind()],
});