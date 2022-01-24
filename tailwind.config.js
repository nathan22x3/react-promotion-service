const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['SF Pro Display', ...defaultTheme.fontFamily['sans']],
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      primary: '#4447E2',
      secondary: {
        DEFAULT: '#A86CE4',
        light: '#F1DEFF',
      },
      warn: {
        DEFAULT: '#FFA10B',
        light: '#FFF6DE',
      },
      danger: {
        DEFAULT: '#E24444',
        light: '#FFCECE',
      },
      success: {
        DEFAULT: '#50D86A',
        light: '#DEFFE5',
      },
      background: '#231F20',
      gray: {
        50: '#DDE1E8',
        100: '#5F5F6F',
        200: '#4B4B62',
        300: '#2D2D3A',
        500: '#1C1C24',
      },
      white: '#ffffff',
    },
  },
  plugins: [],
};
