/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fst-green": "#B8D805",
        "fst-brown": "#523313",
        "fst-light": "#e1dfb6",
      },
      fontFamily: {
        FiraMono: ["FiraMono"],
        Grok: ["Grok"],
        Unison: ["Unison"],
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-black-outline": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#000",
        },
        ".text-black-outline-thin": {
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "#000",
        },
        ".text-white-outline": {
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "#fff",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
