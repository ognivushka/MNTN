/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B1D26', //background
        'accent': '#FBD784',
      },
      fontFamily: {
        'headers': ['PlayfairDisplay', 'serif'],
      },
    },
  },
  plugins: [],
}

