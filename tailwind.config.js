const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./input.css"],
  theme: {
    extend: {
      colors: {
        "fucsia": "#0000FF",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
