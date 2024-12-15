/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
        280: "280px",
        360: "360px",
        375: "375px",
        400: "400px",
        440: "440px",
        480: "480px",
        520: "520px",
      },
      height: {
        812: "812px",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      200: "200px",
      375: "375px",
      400: "400px",
      440: "440px",
      480: "480px",
      520: "520px",
      560: "560px",
      640: "640px",
      768: "768px",
      812: "812px",
      960: "960px",
      992: "992px",
      1024: "1024px",
      1280: "1280px",
      1366: "1366px",
      1440: "1440px",
    },
  },
  plugins: [],
};
