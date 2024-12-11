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
        "tdk-primary": "#0f2930",
        "tdk-secondary": "#0a3032",
        "tdk-accent": "#f16d2d",
      },
      backgroundImage: {
        banner: "url(/src/assets/tdk-hero-bg-2025-min.webp)",
        decor1: "url(/src/assets/tdk-hero-decor1-2025.png)",
        decor2: "url(/src/assets/tdk-hero-decor2-2025.png)",
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
