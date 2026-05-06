/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { 50: "#FDFAF4", 100: "#F8F1E4", 200: "#F0E4CC" },
        clay: {
          400: "#D97757",
          500: "#C4623F",
          600: "#A4502F",
          700: "#7A3B22",
        },
        forest: {
          600: "#3D5A40",
          700: "#2D4530",
          800: "#1F3022",
          900: "#142019",
        },
        ochre: { 400: "#D4A24C", 500: "#B8862C" },
        ink: { 900: "#1C1917", 700: "#3F3935", 500: "#6B635D", 300: "#A8A099" },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      maxWidth: { prose: "68ch", wide: "1240px" },
    },
  },
  plugins: [],
};
