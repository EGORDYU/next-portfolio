module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      boxShadow: {
        light: '0 0 10px rgba(0, 0, 0, 0.4)', // Dark shadow for light mode
        dark: '0 0 10px rgba(255, 255, 255, 0.4)', // Light shadow for dark mode
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
