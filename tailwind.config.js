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
        secondary: "#7BB16A"
      },
      fontSize: {
        logo: "14px"
      },
      // fontFamily: {
      //   sans: ['var(--font-inter)', ...fontFamily.sans],
      // },
    },
  },
  plugins: [],
}