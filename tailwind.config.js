/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      light: {
        primary: '#003147',
        main: '#ABD6E4',
      },
      dark: {
        primary: '#282626', 
        main: '#454646',
      }
    },
    extend: {},
  },
  plugins: [],
}
