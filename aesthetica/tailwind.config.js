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
          // DEFAULT: "#e7e4e4d9",
          DEFAULT: "#e7e7e4",
          dark: "#bfbbbbd9",
        },
        blog: {
          DEFAULT: "#d9d9d9",
          text: "#555454",
        },
      },
      screens: {
        sm: { min: "300px", max: "767px" },
        md: { min: "768px" },
      },
    },
  },
  plugins: [],
};
