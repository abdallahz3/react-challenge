module.exports = {
  content: ["index.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
