import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://augmented-thinking.pages.dev',
  integrations: [tailwind(), mdx()],
});