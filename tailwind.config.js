/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
       'orange': '#1F8BB6',
       'yellow': '#87CEEB',
       'footer': '#0C1214',
       'text-grey': '#71726F'
      },
      backgroundImage: (theme) =>({
        'hero-pattern': "url('/src/assets/img.jpg')",
        'rectangle1': "url('/src/assets/Rectangle 29.png')",
        'rectangle2': "url('/src/assets/Rectangle 32.png')",
        'rectangle3': "url('/src/assets/Rectangle 71.png')",
        'about': "url('/src/assets/image 3.png')",
        'community': "url('/src/assets/Rectangle 40.png')",
        'program' : "url('/src/assets/Rectangle 70.png')",
        'contact': "url('/src/assets/Rectangle 52.png')"
        
      })
    },
  },
  plugins: [],
};
