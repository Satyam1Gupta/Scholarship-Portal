const { hasSelectionSupport } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    ],
  theme: {
    extend: {
      colors : {
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,69%)',
        brightRedSupLight: 'hsl(12,88%,95%)',
        darkBlue: 'hsl(228,39%,23%)',
        darkGrayishBlue: 'hsl(227,12%,61%)',
        veryDarkBlue: 'hsl(233,12%,13%)',
        veryPaleRed: 'hsl(13,100%,96%)',
        veryLightGray: 'hsl(0,0%,98%)',
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
