/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#effff0',
        'primary': '#7AE582',
        'primary-dark': '#57c05f',
      }
    },
  },
  plugins: [],
}
