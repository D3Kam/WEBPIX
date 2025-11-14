/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("@relume_io/relume-tailwind")],
    theme: {
      extend: {},
    },
    plugins: [],
  }