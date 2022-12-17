/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './views/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coworkblue: '#2B3349',
        coworkbeige: '#eae5df',
        coworkdarkbeige: '#9b8f90',
      },
      fontFamily: {
        serif: ['Nunito Sans', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
