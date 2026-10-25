/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#641e17',
        saffron: '#e8ad2e',
        cream: '#fbf7ee',
        ink: '#2e211b',
      },
      fontFamily: {
        sans: ['Mukta', 'Noto Sans Devanagari', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Tiro Devanagari Hindi', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
