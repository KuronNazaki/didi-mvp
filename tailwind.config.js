const { GLOBAL_COLORS } = require('./constants/global');

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
        'accent-blue': GLOBAL_COLORS['accent-blue'],
        'accent-blue-30': GLOBAL_COLORS['accent-blue-30'],
        grey: GLOBAL_COLORS['grey'],
        'light-grey': GLOBAL_COLORS['light-grey'],
      },
    },
  },
  plugins: [],
};
