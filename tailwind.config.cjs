/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { xs: "320px" },
      spacing: {
        120: "30rem",
        128: "32rem",
      },
      colors: {
        "tdk-primary": "#012a27",
        "tdk-secondary": "#0a3032",
        "tdk-accent": "#f16d2d",
      },
      backgroundImage: {
        banner: "url(/src/assets/tdk-2024-cover-2.jpg)",
        dns: "url(/src/assets/tdk-dns.png)",
      },
      fontFamily: {
        hero: ["Akzidenz Grotesk"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/typography"),
  ],
};
