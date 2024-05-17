/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f2fdff",
        "gray-50": "#dce4e6",
        "gray-100": "#bccfd4",
        "gray-500": "#3B5C64",
        "primary-100": "#f0f0f0",
        "primary-300": "#f0f0f0",
        "primary-500": "#f0f0f0",
        "secondary-400": "#ffb56b",
        "secondary-500": "#f27059",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
})

// colors: {
//   "gray-20": "#F8F4EB",
//   "gray-50": "#EFE6E6",
//   "gray-100": "#DFCCCC",
//   "gray-500": "#5E0000",
//   "primary-100": "#FFE1E0",
//   "primary-300": "#FFA6A3",
//   "primary-500": "#FF6B66",
//   "secondary-400": "#FFCD5B",
//   "secondary-500": "#FFC132",
// }