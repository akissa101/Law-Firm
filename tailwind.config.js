module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,html}'],
  theme: {
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme('colors-gray-3', 'currentColor'),
        neon: '#ccff00',
      }),
      backgroundColor: (theme) => ({
        neon: '#ccff00',
      }),
    },
  },
  plugins: [],
};
