/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightTheme: {
          bgwhite: {
            100: "#ffffff",
            200: "#e4ebfa",
            300: "#f4f7fd",
            400: "#828fa3",
          },
        },
        darkTheme: {
          bgwhite: {
            100: "#3e3f4e",
            200: "#2b2c37",
            300: "#000112",
            400: "#20212c",
          },
        },
        indigo: {
          100: "#a8a4ff",
          200: "#635fc7",
        },
        red: {
          100: "#ff9898",
          200: "#ea5555",
        },
      },
    },
  },
  plugins: [],
};
