/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 2s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translateX(-5px, 5px)",
          },
          "20%, 80%": {
            transform: "translateX(5px, -5px)",
          },
        },
      },
      fontFamily: {
        sans: ["Open Sans"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  plugins: [],
};
