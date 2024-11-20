import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      apple: ['AppleGothic', 'Helvetica', 'sans-serif'],
      merri: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brownRose: '#AF8B87',
        rose: '#C29D93',
      },
    },
  },
  plugins: [],
} satisfies Config;
