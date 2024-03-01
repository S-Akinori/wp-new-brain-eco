/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.php"
  ],
  theme: {
    extend: {
      colors: {
        'base': '#FCFCFC',
        'base-color': '#FCFCFC',
        'base-cont': '#111111',
        'main': '#64C5E8',
        'main-cont': '#FCFCFC',
        'accent': '#ffeb01',
        'accent-cont': '#111111',
      },
      screens: {
        'xs': '450px',
      }
    },
    plugins: [],
  }
}
