/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'color-primary': "#1e3a8a",
        'color-secondary': "#0d9488",
        'color-accent': "#64748b",
        'color-light': "#f8fafc",
        'color-dark': "#1f2937",
        'color-border': "#e2e8f0",
      },
      fontFamily:{
        Roboto:["Roboto", 'sans-serif'],
        Poppins:[ "Poppins", 'sans-serif']
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '2.5rem',
        '2xl': '3rem',
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
    },
  },
  plugins: [],
};

