/** @type {import('tailwindcss').Config} */

const default_theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", ...default_theme.fontFamily.sans]
      },
      colors: {
        "dark-blue": "hsl(240, 38%, 20%)",
        "grayish-blue": "hsl(240, 18%, 77%)"
      }
    },
  },
  plugins: [],
}

