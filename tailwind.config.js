/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-text": "linear-gradient(45deg, #48bb78, #38a169)",
      },
    },
  },
  plugins: [],
};
