/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./index.html",
    "./src/**/*.{html,js,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
    //? kendi theme ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
        //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.
    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode:"class",
}

