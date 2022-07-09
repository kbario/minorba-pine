/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/*.{html,ts}",
    "./src/app/**/*.{html,ts}",
    "./src/app/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/assets/.minorba_logo.svg')",
      },
    },
  },
  plugins: [],
};
