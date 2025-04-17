/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E31414', // Red
        secondary: '#000000', // Black
        light: '#FFFFFF', // White
        'gray-light': '#F5F5F5',
        'gray-medium': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};