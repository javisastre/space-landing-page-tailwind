const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./input.css"],
  theme: {
    extend: {
      colors: {
        "corporate-orange": "#5A2418",
        "corporate-dark": "#09060B",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
