/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include the paths to your files
  ],
  theme: {
    extend: {
      colors: {
        "1st": "#eeeeee",
        "2nd": "#dddddd",
        "3rd": "#cccccc",
        "4th": "#a2aeb8",
        "5th": "#465d72",
      },
    },
  },
  plugins: [],
};
