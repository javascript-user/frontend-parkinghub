/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'color-primary':"#ffa31a"
      },
      fontFamily:{
        Roboto:["Roboto", 'sans-serif'],
        Poppins:[ "Poppins", 'sans-serif']
      },
      keyframes: {
        slideIn: {
          from: { transform: "translateX(-30%)" },
          to: { transform: "translateX(30%)" },
        },
      },
      animation: {
        slideIn: "6s linear 4s infinite running slideIn",
      },
      backgroundImage: {
       
      },      
    },
  },
  plugins: [],
};

