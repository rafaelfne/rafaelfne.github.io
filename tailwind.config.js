/** @type {import('tailwindcss').Config} */
export default {
  darkMode: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Cartograph CF"']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

