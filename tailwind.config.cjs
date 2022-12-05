/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#CA6702",
      text_color: "#212529",
      background_color: "#F8F9FA",
      background_gray_color: "#DEE2E6",
    },

    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#CA6702",
          secondary: "#212529",

          success: "#1B6800",
          danger: "#951C1C",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
