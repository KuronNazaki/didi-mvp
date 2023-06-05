// const { StyleSheet } = require('react-native');

const GLOBAL_COLORS = {
  INK: {
    primary: '#3C3C43',
    secondary: '#8A8A8E',
    tertiary: '#C5C5C7',
    quaternary: '#D8D8D9',
    quinary: '#E3E3E3',
    senary: '#ECECEC',
    white: '#FFFFFF',
  },
  ACCENT: {
    green100: '#28CD41',
    green75: '#5ED970',
    green50: '#93E6A0',
    green25: '#C9F3CF',
    yellow100: '#FFCC00',
    yellow75: '#FFD940',
    yellow50: '#FFE580',
    yellow25: '#FFF2BF',
    red100: '#FF3B30',
    red75: '#FF6C64',
    red50: '#FF9D97',
    red25: '#FFCECB',
    blue100: '#2A66F2',
    blue75: '#5F8CF5',
    blue50: '#94B3F8',
    blue25: '#CAD9FC',
  },
  GRADIENT: {
    blue100: {
      start: '#537FE7',
      end: '#2A66F2',
    },
    blue60: {
      start: '#98B2F1',
      end: '#7FA3F7',
    },
    blue30: {
      start: '#CBD9F8',
      end: '#BFD1FB',
    },
    darkblue100: {
      start: '#4297FE',
      end: '#0055BC',
    },
    darkblue60: {
      start: '#8EC1FE',
      end: '#6699D7',
    },
    darkblue30: {
      start: '#C6E0FF',
      end: '#B3CCEB',
    },
    teal100: {
      start: '#C0EEF2',
      end: '#8BD3DA',
    },
    teal60: {
      start: '#D9F5F7',
      end: '#B9E5E9',
    },
    teal30: {
      start: '#ECFAFB',
      end: '#DCF2F4',
    },
  },
  'accent-blue': '#537FE7',
  'accent-blue-30': '#537FE730',
  grey: '#36373B',
  'light-grey': '#9DA0A5',
  'light-slate': '#F8F8F8',
  'darker-slate': '#EFF3F4',
};

const fontOffset = 8;

const GLOBAL_TEXT_STYLES = {
  regular28: {
    fontWeight: '400',
    fontSize: fontOffset + 28,
    lineHeight: fontOffset + 34,
  },
  bold28: {
    fontWeight: '700',
    fontSize: fontOffset + 28,
    lineHeight: fontOffset + 34,
  },
  regular22: {
    fontWeight: '400',
    fontSize: fontOffset + 22,
    lineHeight: fontOffset + 28,
  },
  bold22: {
    fontWeight: '700',
    fontSize: fontOffset + 22,
    lineHeight: fontOffset + 28,
  },
  regular20: {
    fontWeight: '400',
    fontSize: fontOffset + 20,
    lineHeight: fontOffset + 24,
  },
  bold20: {
    fontWeight: '700',
    fontSize: fontOffset + 20,
    lineHeight: fontOffset + 24,
  },
  regular17: {
    fontWeight: '400',
    fontSize: fontOffset + 17,
    lineHeight: fontOffset + 22,
  },
  semibold17: {
    fontWeight: '600',
    fontSize: fontOffset + 17,
    lineHeight: fontOffset + 22,
  },
  regularitalic17: {
    fontWeight: '400',
    fontSize: fontOffset + 17,
    lineHeight: fontOffset + 22,
    fontStyle: 'italic',
  },
  semibolditalic17: {
    fontWeight: '600',
    fontSize: fontOffset + 17,
    lineHeight: fontOffset + 22,
    fontStyle: 'italic',
  },
  regular16: {
    fontWeight: '400',
    fontSize: fontOffset + 16,
    lineHeight: fontOffset + 21,
  },
  semibold16: {
    fontWeight: '600',
    fontSize: fontOffset + 16,
    lineHeight: fontOffset + 21,
  },
  regularitalic16: {
    fontWeight: '400',
    fontSize: fontOffset + 16,
    lineHeight: fontOffset + 21,
    fontStyle: 'italic',
  },
  semibolditalic16: {
    fontWeight: '600',
    fontSize: fontOffset + 16,
    lineHeight: fontOffset + 21,
    fontStyle: 'italic',
  },
  regular15: {
    fontWeight: '400',
    fontSize: fontOffset + 15,
    lineHeight: fontOffset + 20,
  },
  semibold15: {
    fontWeight: '600',
    fontSize: fontOffset + 15,
    lineHeight: fontOffset + 20,
  },
  regularitalic15: {
    fontWeight: '400',
    fontSize: fontOffset + 15,
    lineHeight: fontOffset + 20,
    fontStyle: 'italic',
  },
  semibolditalic15: {
    fontWeight: '600',
    fontSize: fontOffset + 15,
    lineHeight: fontOffset + 20,
    fontStyle: 'italic',
  },
  regular13: {
    fontWeight: '400',
    fontSize: fontOffset + 13,
    lineHeight: fontOffset + 16,
  },
  semibold13: {
    fontWeight: '600',
    fontSize: fontOffset + 13,
    lineHeight: fontOffset + 16,
  },
  regularitalic13: {
    fontWeight: '400',
    fontSize: fontOffset + 13,
    lineHeight: fontOffset + 16,
    fontStyle: 'italic',
  },
  semibolditalic13: {
    fontWeight: '600',
    fontSize: fontOffset + 13,
    lineHeight: fontOffset + 16,
    fontStyle: 'italic',
  },
  regular10: {
    fontWeight: '400',
    fontSize: fontOffset + 10,
    lineHeight: fontOffset + 12,
  },
  semibold10: {
    fontWeight: '600',
    fontSize: fontOffset + 10,
    lineHeight: fontOffset + 12,
  },
  regularitalic10: {
    fontWeight: '400',
    fontSize: fontOffset + 10,
    lineHeight: fontOffset + 12,
    fontStyle: 'italic',
  },
  semibolditalic10: {
    fontWeight: '600',
    fontSize: fontOffset + 10,
    lineHeight: fontOffset + 12,
    fontStyle: 'italic',
  },
};

module.exports = { GLOBAL_COLORS, GLOBAL_TEXT_STYLES, fontOffset };
