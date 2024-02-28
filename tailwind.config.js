/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-color': '#2A68FF',
        'greyIsh': '#F1F4F8',
        'card-shadow': '#F7F8F9',
        'text-color': '#252B36',
      }
    },
  },
  plugins: [],
}

