/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layouts/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#537FE7',
        'accent-blue-30': '#537FE730',
      },
      textColor: {
        primary: '#36373B',
        secondary: '#9DA0A5',
      },
    },
  },
  plugins: [],
};
