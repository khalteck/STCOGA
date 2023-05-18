/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Small screens
      md: "824px", // Medium screens
      lg: "1100px", // Large screens
      xl: "1280px", // Extra-large screens
      custom: "1440px", // Custom breakpoint
    },
    extend: {
      backgroundImage: {
        sec: "url('/images/second.jpeg')",
        home: "url('/images/homebg.jpg')",
        gallery: "url('/images/gallery.jpeg')",
      },
    },
  },
  plugins: [],
};
