/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure paths are correct
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Ensure DaisyUI is added
  daisyui: {
    themes: ["light", "dark"], // Ensure dark mode is included
  },
};
