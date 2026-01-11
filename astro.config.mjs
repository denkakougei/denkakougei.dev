// @ts-check

import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [svelte()],

  image: {
    domains: [`${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io`],
  },
});
