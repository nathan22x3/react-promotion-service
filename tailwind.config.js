const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/index.html', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['SF Pro Display', ...defaultTheme.fontFamily['sans']],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '20px'],
      lg: ['18px', '20px'],
      xl: ['24px', '20px'],
      '2xl': ['26px', '20px'],
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      primary: '#4447e2',
      secondary: {
        DEFAULT: '#a86ce4',
        light: '#f1deff',
      },
      success: {
        DEFAULT: '#50d86a',
        light: '#deffe5',
      },
      warn: {
        DEFAULT: '#ffa10b',
        light: '#fff6de',
      },
      danger: {
        DEFAULT: '#e24444',
        light: '#ffcece',
      },
      gray: {
        300: '#dde1e8',
        400: '#a6adb1',
        500: '#5f5f6f',
        600: '#4b4b62',
        700: '#2d2d3a',
      },
      dark: '#1c1c24',
      white: '#ffffff',
    },
  },
  plugins: [],
};
