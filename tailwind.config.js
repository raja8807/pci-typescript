/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    screens: {
      'md': '992px',
      // => @media (min-width: 992px) { ... }
    },
    extend: {
      colors : {
        "green-dark" : "#076C74",
        "green-light" : "#076C74",
        "grey" : "#ECF5FA"
      }
    },
  },
  plugins: [],
}
