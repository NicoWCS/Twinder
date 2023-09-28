/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F8F0E5",
          secondary: "#EADBC8",
          accent: "#102C57",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
