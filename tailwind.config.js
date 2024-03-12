/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#92278F",
        "neutral-250": "#D9D9D9",
        "theme-blue-50": "#F6F9FF",
        "theme-blue-100": "#DDE7F1",
        "theme-blue-400": "#008CFF",
      },
      height: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
