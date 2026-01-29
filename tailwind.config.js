/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Cartograph CF"', 'ui-sans-serif', 'system-ui', 'sans-serif']
    }
  },
  plugins: []
}

