/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
    extend: {
      fontFamily: {
        Alexandria : ['Alexandria', 'sans-serif'],
        NotoSerif : ['Noto Serif', 'serif'],
        Ubuntu : ['Ubuntu', 'sans-serif'],
        Georgia : ['Noto Serif Georgian', 'serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
