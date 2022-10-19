/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto Mono']
      },
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#4C1B1BFF',
          200: '#724949FF'
        }
      }
    },
  },
  plugins: [],
}
