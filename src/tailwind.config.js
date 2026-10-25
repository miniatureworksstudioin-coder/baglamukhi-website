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
        deep: '#35100c', // deep brown
        leaf: '#167b4a', // WhatsApp / confirm green (named "leaf" so Tailwind's built-in green palette is not overwritten)
      },
      fontFamily: {
        sans: ['Mukta', 'Noto Sans Devanagari', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Tiro Devanagari Hindi', 'Georgia', 'serif'],
        hindi: ['Tiro Devanagari Hindi', 'Mukta', 'serif'],
      },
    },
  },
  plugins: [],
};
