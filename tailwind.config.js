/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: [
        {
          PlusJakartarSans: ["Plus Jakarta Sans", "sans - serif"],
        },
      ],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".btn-black": {
          backgroundColor: "rgba(0, 0, 0, 1)",
          color: "#fff",
          position: "absolute",
          right: "80px",
          top: "33px",
          width: "136px",
          height: "33px",
          "&:hover": {
            backgroundColor: "#fffff",
          },
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
      });
    }),
    require("@tailwindcss/forms"),
  ],
};
