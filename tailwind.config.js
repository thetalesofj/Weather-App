/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,html,jsx}",
    "./public/*.{js,html,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app_warm': "url('../public/img/warm.jpg')",
        'app_cold': "url('../public/img/cold.jpg')",
      },
      screens: {'sm': {'max': '640px'} }
    },
  },
  plugins: [],
}
