import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://github.com/BlackCat-MimiW/augmented-thinking.github.io',
  base: '/augmented-thinking',
  integrations: [tailwind(), mdx(), sitemap()],
});
