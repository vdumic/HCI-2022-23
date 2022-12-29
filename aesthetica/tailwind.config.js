/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"DM Serif Display"', "sans-serif"],
      },
      colors: {
        bckgrnd: {
          light: "#efefefd9",
          DEFAULT: "#e7e4e4d9",
          dark: "#bfbbbbd9",
        },
      },
    },
  },
  plugins: [],
};
