// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [svelte()],

  image: {
    domains: [`${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io`]
  }
});
