/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#063751",
        primaryLight: "#08527A",
        secondary: "#0866FF",
        tertiary: "#0099FF",
        purple: "#6136BA",
        lime: "#9CD84E",
        gray: "#D9D9D9",
        red: "#F64A45",
        blueDark: "#3C7696",
        cyan: "#16D9EB",
        lightBlue :"#e1f5fe",
        lightGray: "#E2E5E9",
        lightBg: "#F6F9FA",
      },
      fontFamily: {
        sans: ["Merriweather Sans", "sans-serif"],
        decorative: ["Rakkas", "cursive"],
      },
      clipPath: {
        "custom-shape": "polygon(0 0, 100% 0, 100% 100%, 34% 100%)",
      },
    },
  },
  plugins: [],
};
