/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,html,jsx}",
    "./public/*.{js,html,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-warm': "url('https://pixabay.com/images/id-736885/')",
        'app-cold': "url('https://pixabay.com/images/id-1185464/')",
      }
    },
  },
  plugins: [],
}
