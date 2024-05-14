/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mid-blue" : "#3c6ca8",
        "grey" : "#F4F4F4",
        "light-brown" : "#D1C49E",
        "mint" : "#A2D89E",
        "purple" : "#AD95D0",
        "verylight-blue" : "#E4EAF2",
        "medium-grey" : "#7B7B7B",
        "dark-blue" : "#3C6CA8",
        "pink" : "#FDC5CC",
        "blue-light" : '#5B99E7',
      },
      fontFamily: {
        sans: ['quicksand'],
        handwritten: ['Lazydog', 'cursive'],
      },
    },
  },
  plugins: [],
}

