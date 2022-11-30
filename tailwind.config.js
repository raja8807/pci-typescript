/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    screens: {
      'md': '992px',
      // => @media (min-width: 992px) { ... }
      'sm' : '664px'
    },
    extend: {
      colors : {
        "green-light" : "#37AFA6",
        "green-dark" : "#076C74",
        "grey" : "#ECF5FA"
      }
    },
  },
  plugins: [],
}
