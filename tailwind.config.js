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
        'light-slate': GLOBAL_COLORS['light-slate'],
        'dark-slate': GLOBAL_COLORS['darker-slate'],
        'ink-primary': GLOBAL_COLORS.INK.primary,
        'ink-secondary': GLOBAL_COLORS.INK.secondary,
        'ink-tertiary': GLOBAL_COLORS.INK.tertiary,
        'ink-quaternary': GLOBAL_COLORS.INK.quaternary,
        'ink-quinary': GLOBAL_COLORS.INK.quinary,
        'ink-senary': GLOBAL_COLORS.INK.senary,
        'ink-white': GLOBAL_COLORS.INK.white,
        'accent-green100': GLOBAL_COLORS.ACCENT.green100,
        'accent-green75': GLOBAL_COLORS.ACCENT.green75,
        'accent-green50': GLOBAL_COLORS.ACCENT.green50,
        'accent-green25': GLOBAL_COLORS.ACCENT.green25,
        'accent-yellow100': GLOBAL_COLORS.ACCENT.yellow100,
        'accent-yellow75': GLOBAL_COLORS.ACCENT.yellow75,
        'accent-yellow50': GLOBAL_COLORS.ACCENT.yellow50,
        'accent-yellow25': GLOBAL_COLORS.ACCENT.yellow25,
        'accent-red100': GLOBAL_COLORS.ACCENT.red100,
        'accent-red75': GLOBAL_COLORS.ACCENT.red75,
        'accent-red50': GLOBAL_COLORS.ACCENT.red50,
        'accent-red25': GLOBAL_COLORS.ACCENT.red25,
        'accent-blue100': GLOBAL_COLORS.ACCENT.blue100,
        'accent-blue75': GLOBAL_COLORS.ACCENT.blue75,
        'accent-blue50': GLOBAL_COLORS.ACCENT.blue50,
        'accent-blue25': GLOBAL_COLORS.ACCENT.blue25,
      },
    },
  },
  plugins: [],
};
