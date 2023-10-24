/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
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
  plugins: [require('tailwindcss-animate')],
};
