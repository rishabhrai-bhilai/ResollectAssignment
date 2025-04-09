// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      colors: {
        "esollect-blue": "#1E3A8A",
        "sidebar-active": "#E0F2FE",
        "tab-active": "#3B82F6",
        "tab-inactive": "#D1D5DB",
      },
      fontSize: {
        xs: "0.75rem",
      },
    },
  },
  plugins: [],
};