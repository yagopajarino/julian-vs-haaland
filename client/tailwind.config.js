/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "julian-img": "url('/public/julian.jpeg')",
        "haaland-img": "url('/public/haaland.jpeg')",
      },
      fontSize: {
        "9xl": ["15rem", "15rem"],
      },
    },
  },
  plugins: [],
};
