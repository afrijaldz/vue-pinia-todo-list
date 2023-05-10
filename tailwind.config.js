/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,html}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    boxShadow: {
      md: '0.2rem 0.2rem 0 #222;'
    },
    extend: {
      colors: {
        whitish: '#f2f7f5'
      }
    }
  },
  plugins: []
}
