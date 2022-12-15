/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#CA4009",
      text_color: "#212529",
      background_color: "#F8F9FA",
      background_gray_color: "#DEE2E6",
    },
    fontFamily: {
      sans: ["Roboto Condensed", "sans-serif"],
      title: ["Montserrat", "sans-serif"],
    },

    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#CA4009",
          secondary: "#212529",
          success: "#1B6800",
          danger: "#951C1C",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
