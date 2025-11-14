/** @type {import('tailwindcss').Config} */
module.exports = {
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
      "./hooks/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("@relume_io/relume-tailwind")],
    theme: {
      extend: {},
    },
    plugins: [],
  }