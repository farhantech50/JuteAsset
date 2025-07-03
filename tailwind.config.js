/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Navbar colors
        "custom-navbar": {
          DEFAULT: "#ffffff", // white nav in light mode
          dark: "#000000", // black nav in dark mode
        },

        // Background colors
        "custom-background": {
          DEFAULT: "#ffffff", // white bg in light mode
          dark: "#000000", // black bg in dark mode
        },

        // Text colors
        "custom-text": {
          DEFAULT: "#1a1a1a", // dark text in light mode
          dark: "#f0f0f0", // light text in dark mode
        },

        // Accent colors (green for buttons etc)
        "custom-accent": {
          DEFAULT: "#8DB600", // apple green
          dark: "#8DB600", // same green in dark mode for consistency
          hover: "#6f9900", // darker green for hover
        },
      },

      fontFamily: {
        roboto: ['"Roboto Slab"', "serif"],
      },
    },
  },
  plugins: [],
});
