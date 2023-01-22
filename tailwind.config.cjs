/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../src/assets/wave-white.png)',
        'pattern-white-dots': 'url(../src/assets/pattern-white-dots.png)',
        'pattern-characters-red': 'url(../src/assets/pattern-characters-red.png)',
        'character-l': 'url(../src/assets/character-l.png)',
        'pattern-yellow-dots': 'url(../src/assets/pattern-yellow-dots.png)',
        'wave-pink': 'url(../src/assets/wave-pink.png)',

        'arrow-blue': 'url(../src/assets/arrow-blue.png)',
      })
    },
  },
  plugins: [],
}