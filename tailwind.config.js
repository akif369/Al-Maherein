/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          della: ['Della Respira', 'serif'],
          redRose: ['Red Rose', 'cursive'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  