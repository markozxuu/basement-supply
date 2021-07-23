module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        basement: [
          'Basement Grotesque',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
