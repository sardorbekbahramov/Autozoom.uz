/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],

  theme: {
    extend: {},
    screens: {
      xs: "320px",
      ss: "608px",
      sm: "708px",
      md: "1000px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
