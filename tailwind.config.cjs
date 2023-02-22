/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tdk-primary": "#2b5955",
        "tdk-secondary": "#0a3032",
        "tdk-accent": "#f16d2d",
      },
      backgroundImage: {
        banner: "url(/src/assets/tdk-banner.png)",
      },
    },
  },
  plugins: [],
};
