/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
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
    },
  },
  plugins: [],
};
