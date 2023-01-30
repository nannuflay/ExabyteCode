/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6b6b",
        secondary: "#002640",
        // ...
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        paprika: ["paprika", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
