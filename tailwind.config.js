/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#1F8BB6",
        yellow: "#87CEEB",
        footer: "#0C1214",
        "text-grey": "#71726F",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/assets/Rectangle 2.png')",
        "hero-pattern-responsive": "url('/src/assets/Responsive2.png')",
        rectangle1: "url('/src/assets/Rectangle 29.png')",
        "rectangle1-responsive": "url('/src/assets/Rectangle 85.png')",
        rectangle2: "url('/src/assets/Rectangle 32.png')",
        rectangle3: "url('/src/assets/Rectangle 71.png')",
        "rectangle3-responsive": "url('/src/assets/Rectangle 84.png')",
        about: "url('/src/assets/image 3.png')",
        community: "url('/src/assets/Rectangle 40.png')",
        program: "url('/src/assets/Rectangle 70.png')",
        criticalHealthBg: "url('/src/assets/Rectangle 72.png')",
        "program-hero": "url('/src/assets/program-hero.jpg')",
        "program-hero-mobile": "url('/src/assets/program-hero-mobile.png')",
        contact: "url('/src/assets/Rectangle 52.png')",
        home: "url('/src/assets/home.jpeg')",
      }),
    },
    screens: {
      smallMobile: { max: "350px" },
      mobile: { max: "480px" },
      tablet: { max: "1023px" },
      tabletScreen: { max: "768px" },
      tabletOnly: { min: "481px", max: "1023px" },
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1400px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
