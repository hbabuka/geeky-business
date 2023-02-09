/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      ...colors,
      primary: colors.indigo,
      secondary: colors.slate,
      success: colors.emerald,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
