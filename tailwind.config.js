/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      noto: "'Noto Sans Arabic', sans-serif",
    },
    colors: {
      white: "#F6F8FC",
      blue: "#D4E7FF",
      darckBlue: "#2E6FF4",
      gray: "#E0E6EE",
      darkGray: "#262F44",
      lightGray: "#EEF4FA",
      lightText: "#58647C",
      tableHead: "#050B19",
      statusGreen: "#66E6B0",
      statusRed: "#F9979B",
      statusY: "#FAD141",
      borderTable: "#C6D0E0",
    },
  },
  plugins: [],
};
