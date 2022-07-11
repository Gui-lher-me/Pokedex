/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-type-bug': '#8BD674',
        'background-type-dark': '#6F6E78',
        'background-type-dragon': '#7383B9',
        'background-type-electric': '#F2CB55',
        'background-type-fairy': '#EBA8C3',
        'background-type-fighting': '#EB4971',
        'background-type-fire': '#FFA756',
        'background-type-flying': '#83A2E3',
        'background-type-ghost': '#8571BE',
        'background-type-grass': '#8BBE8A',
        'background-type-ground': '#F78551',
        'background-type-ice': '#91D8DF',
        'background-type-normal': '#B5B9C4',
        'background-type-poison': '#9F6E97',
        'background-type-psychic': '#FF6568',
        'background-type-rock': '#D4C294',
        'background-type-stell': '#4C91B2',
        'background-type-water': '#58ABF6',
      },
      borderRadius: {
        '10px': '0.625rem',
      },
      spacing: {
        '334px': '20.875rem',
        '115px': '7.188rem',
      },
    },
  },
  plugins: [],
};
