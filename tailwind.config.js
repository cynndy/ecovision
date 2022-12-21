/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // extend: {},
    colors: {
      'primary': '#6A983C',
      'secondary': '#84B94E',
      'white': '#ffffff',
      'light': '#F4F8EC',
      'red': '#BE123C',
      'gray-100': '#F2F4F7',
      'gray-300': '#D0D5DD',
      'gray-500': '#667085',
      'gray-700': '#344054'
    }
  },
  plugins: [require("daisyui")],
}


