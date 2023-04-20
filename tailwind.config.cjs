/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors:{
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily:{
      sans: ['spaceGrotesk', 'sans-serif'],
    }
  },
  plugins: [],
}
