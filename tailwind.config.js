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
        primary: "#EF6632",
        secondary: "#ecc94b",
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
