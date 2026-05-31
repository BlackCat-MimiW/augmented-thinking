import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink:    '#0f0f0f',
        mist:   '#f7f6f3',
        border: '#e5e2db',
        accent: '#1a1a2e',
        gold:   '#b8860b',
      },
    },
  },
  plugins: [typography],
};
