// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        card: "#111827",
        border: "#1f2937",
        accent: "#a78bfa",
        textPrimary: "#ffffff",
        textSecondary: "#9ca3af",
      },
    },
  },
  plugins: [],
}
