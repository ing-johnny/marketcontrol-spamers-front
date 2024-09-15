/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '3840x2160': '3840px',
        '2160x1440': '2560px',
        '1920x1080': '1920px',
      },
    },
  },
  plugins: [],
}

