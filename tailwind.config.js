/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,html}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    boxShadow: {
      md: '0.2rem 0.2rem 0 #222;'
    },
    extend: {}
  },
  plugins: []
}
