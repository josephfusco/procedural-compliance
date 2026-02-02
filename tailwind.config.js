/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html,js}",
    "./docs/**/**/*.{html,js}",
    "./build-templates.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-gold': '#C89552',
        'gov-blue': '#005EA2',
        'flag-red': '#B22234',
        'ny-blue': '#003F87',
      },
    },
  },
  plugins: [],
}
