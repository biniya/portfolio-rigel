/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2463eb",
        secondary: "#0C121C",
      },
      fontFamily: {
        sans: ["Inter"],
        lexend: ["Lexend"],
        basic: ["Lexend", "Noto Sans Ethiopic"],
      },
    },
  },
  plugins: [],
};
