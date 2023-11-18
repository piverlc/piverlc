import tailwindcssTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        light: '#FAFAFA',
        'mid-night': '#121212',
        'mid-night-light': '#1D1D1D',
        'mid-night-dark': '#111010',
        'link-primary': '#58D5BA',
        'link-secondary': '#86EAD4',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
} satisfies Config;
