/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./index.html",
    "./src/**/*.{html,js,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

