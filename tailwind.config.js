module.exports = {
  //mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E94560',
        secondary: '#0F3057',
        fondo: '#D9EEF8',
        dark: '#111827'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
