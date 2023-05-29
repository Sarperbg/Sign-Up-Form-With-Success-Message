/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens: {
      'mobile': '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        'tomato': 'hsl(4, 100%, 67%)',
        'sarper': 'hsl(234, 29%, 20%)',
        'charcoalgray': 'hsl(235, 18%, 26%)',
        'grey': 'hsl(231, 7%, 60%)',
        'white': 'hsl(0, 0%, 100%)',
        'midnight': '#121063',
        'semi-grey': '#242742',
        'primary': '#ff6257',
        'bg-color': '#36384e',

      },
    },
  },
  plugins: [],
}