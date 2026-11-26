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
        "tdk-primary": "#442023",
        "tdk-secondary": "#442023",
        "tdk-accent": "#ec6f26",
        "tdk-primary-light": "#01ac9e",
        "tdk-beige": "#f2e7d0",
        "tdk-beige-dark": "rgb(213 188 153)",
        "tdk-brown": "#3d1c1e",
      },
      backgroundImage: {
        banner: "url(/src/assets/background.png)",
        decor1: "url(/src/assets/tdk-hero-decor1-2025.png)",
        decor2: "url(/src/assets/tdk-hero-decor2-2025.png)",
        dns: "url(/src/assets/tdk-dns.png)",
      },
      fontFamily: {
        hero: ["Akzidenz Grotesk"],
        condensed: ["Barlow Condensed", "Arial Narrow", "sans-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/typography"),
  ],
};
