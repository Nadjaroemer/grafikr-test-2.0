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
      backgroundImage: {
        kiranan: "url('../assets/Kiranan.png')",
        erik: "url('./images/Erik.png')",
      },
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
          width: "136px",
          height: "33px",
          "&:hover": {
            backgroundColor: "#fffff",
          },
        },
        ".btn-nav": {
          position: "absolute",
          right: "80px",
          top: "33px",
        },
        ".btn-burger": {
          position: "fixed",
        },
      });
    }),
    require("@tailwindcss/forms"),
  ],
};
