import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://tourmaline-cucurucho-1e33df.netlify.app',
  integrations: [tailwind(), mdx()],
});