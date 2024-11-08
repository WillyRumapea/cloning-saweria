/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        mmono: ["Geist Mono", "monospace"],
        comforta: ["Comfortaa", "sans-serif"],
      },
      colors: {
        "form-color": "#f2f6f5",
        "blue-pay": "#118eea",
        "yell-pay": "#fbae2c",
        "purp-pay": "#a683dd",
      },
    },
  },
  plugins: [],
};
