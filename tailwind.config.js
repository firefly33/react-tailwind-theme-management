/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "var(--theme-primary)",
      "primary-light": "var(--theme-primary-light)",
      secondary: "var(--theme-secondary)",
      "secondary-light": "var(--theme-secondary-light)",
      "text-base": "var(--theme-text-base)",
    },
    extend: {
      colors: {
        primary: "var(--theme-primary)",
        "primary-light": "var(--theme-primary-light)",
        secondary: "var(--theme-secondary)",
        "secondary-light": "var(--theme-secondary-light)",
        base: "var(--theme-text-base)",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-primary",
    "bg-secondary",
    "bg-primary-light",
    "bg-secondary-light",
    "text-primary-light",
    "text-secondary-light",
    "text-base",
  ],
};
