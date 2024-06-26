/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primarycolor: '#3B5D50',
        secondaryColor: '#F8B810',
        paragraphColor: '#6a6a6a',      
        deepwhiteColor: '#737272',
        blackColor: "#222222",
        greenColor: "#3b5d50",
        redColor: "#cc3433",
        darkColor: '#000',
        yellowcolor: "#F8B810",
        backgroundcolor: "#eff2f1",
      },
       fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding:{
         DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    },
  },
  plugins: [],
}

