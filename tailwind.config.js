/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '340px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        ave: ['"Avenir LT Std-95Black"', 'Helvetica'],
      },
      colors: { 
        grayish: "#2D3039",
        greenish: "#2BAC1D",
      },
      backgroundImage: {
        Rectangle7: "url('../public/assets/exercises/Rectangle7.png')",
        Rectangle8: "url('../public/assets/exercises/Rectangle8.png')",
        Rectangle9: "url('../public/assets/exercises/Rectangle9.png')",
        Rectangle10: "url('../public/assets/exercises/Rectangle10.png')",
        Rectangle11: "url('../public/assets/exercises/Rectangle11.png')",
      },
    },
  },
  plugins: [],
};
