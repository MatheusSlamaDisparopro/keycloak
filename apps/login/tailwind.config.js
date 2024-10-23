/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../packages/core/src/**/*{.js,.ts,.jsx,.tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
};
