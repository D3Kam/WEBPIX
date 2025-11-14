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
      extend: {
        fontSize: {
          'h1': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
          'h2': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
          'h3': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
          'h4': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
          'h5': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
          'h6': ['1.25rem', { lineHeight: '1.4', fontWeight: '700' }],
          'medium': ['1rem', { lineHeight: '1.5' }],
        },
        borderRadius: {
          'image': '0.5rem',
        },
        colors: {
          scheme: {
            'text': '#000000',
            'background': '#ffffff',
            'foreground': '#000000',
            'border': '#000000',
          },
        },
      },
    },
    plugins: [],
  }