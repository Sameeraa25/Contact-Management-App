/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#6418C3",
        primary: "#323232",
        secondary: "#525252",
        grayLight: "#f2f2f2",
        cyan: "#00c7ff",
        navy: '#001f3f',
        'navy-light': '#004080',
        'navy-dark': '#001433',
      },
    },
  },
  plugins: [],
};
