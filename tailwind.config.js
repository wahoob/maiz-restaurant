/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cotoris: ["Cotoris", "sans-serif"], // For normal weight
        "cotoris-bold": ["cotorisBold", "sans-serif"], // For bold weight
        "cotoris-heavy": ["cotorisHeavy", "sans-serif"], // For heavy weight
        "cotoris-italic": ["cotorisItalic", "sans-serif"], // For italic style
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(91, 0, 23, 0) 0%, #5B0017 93.23%)",
      },
    },
  },
  plugins: [],
};
