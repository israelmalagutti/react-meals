const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      boxShadow: {
        glow: "0 0 16px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
