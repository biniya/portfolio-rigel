/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2463eb",
        secondary: "#0C121C",
        brand: {
          50: "#eff6ff", // very light blue
          100: "#dbeafe", // lighter blue
          150: "#bfdbfe", // light blue
          200: "#93c5fd", // less light blue
          250: "#60a6fa", // muted blue
          300: "#3b83f6", // medium blue
          350: "#2463eb", // darkish blue
          400: "#1d4fd8", // dark blue
          450: "#1e41af", // darker blue
          500: "#1e3a8a", // darkest blue
        },
      },
      fontFamily: {
        sans: ["Inter"],
        lexend: ["Lexend"],
        basic: ["Lexend", "Noto Sans Ethiopic"],
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
