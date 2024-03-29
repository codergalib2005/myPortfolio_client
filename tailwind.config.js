/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        230: "230px",
        300: "300px",
        100: "100px",
      },
      height: {
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
      },
      maxHeight: {
        700: "700px",
      },
      width: {
        100: "100px",
      },
      colors: {
        dark: "#2b2b36",
        secondary: "#ffc107",
        "secondary-deep": "orange",
        overlay: "rgba(0, 0, 0, 0.8)",
        overlay2: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
