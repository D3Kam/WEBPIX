/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./home/**/*.{js,ts,jsx,tsx}",
      "./about/**/*.{js,ts,jsx,tsx}",
      "./contact/**/*.{js,ts,jsx,tsx}",
      "./faq/**/*.{js,ts,jsx,tsx}",
      "./how-it-works/**/*.{js,ts,jsx,tsx}",
      "./legal/**/*.{js,ts,jsx,tsx}",
      "./account/**/*.{js,ts,jsx,tsx}",
      "./xframe/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("@relume_io/relume-tailwind")],
    theme: {
      extend: {},
    },
    plugins: [],
  }