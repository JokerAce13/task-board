// const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#519839",
        secondary: "#7BB16A",
        grayList: "#EBECF0",
        grayText: "#5E6C84",
        grayDetail: "#F4F5F7",
        blueButton: "#1B90FC",
      },
      fontSize: {
        logo: "14px"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter')()
  ],
}