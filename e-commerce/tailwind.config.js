/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        successGreen: "rgba(45, 192, 113, 1)",
        darkBg: "rgba(37, 43, 66, 1)",
        whiteText: "rgba(255, 255, 255, 1)",
        hedBgWt: "rgba(250, 250, 250, 1)",
        hdTxSelected: "rgba(37, 43, 66, 1)",
        hdGrey: "rgba(115, 115, 115, 1)",
        prBlue: "rgba(35, 166, 240, 1)",
      },
    },
  },
  plugins: [],
});
