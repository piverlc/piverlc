/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        light: "#FAFAFA",
        midnight: "#121212",
        midnightLight: "#1D1D1D",
        midnightDark:"#111010"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
