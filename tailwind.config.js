/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // adjust this if your file structure is different
  ],
  theme: {
    extend: {
      colors: {
        primary: "#267A95",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sourcecodepro: ["Source Code Pro", "monospace"],
        lato: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
