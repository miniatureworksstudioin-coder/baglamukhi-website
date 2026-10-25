/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#641e17',
        saffron: '#e8ad2e',
        cream: '#fbf7ee',
        ink: '#2e211b',
        deep: '#35100c',
        leaf: '#167b4a',
      },
      fontFamily: {
        sans: ['Mukta', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        hindi: ['Tiro Devanagari Hindi', 'serif'],
      },
    },
  },
  plugins: [],
}
