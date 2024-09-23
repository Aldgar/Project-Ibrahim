/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./mainsrc/**.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-color" : "#f4f4f4",
        "main-color":"#23155B",
        "sec-main-color" : "#8053FF "
      }, 
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }, 
      
    },
  },
  plugins: [],
}

