export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0a0a0a",
          50: "#141414",
          100: "#1c1c1c",
          200: "#262626",
        },
      },
      keyframes: {
        blob: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "33%": { transform: "scale(1.2) translate(15px, -15px)" },
          "66%": { transform: "scale(0.85) translate(-15px, 15px)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        blob: "blob 14s infinite ease-in-out",
        float: "float 5s infinite ease-in-out",
      },
      backgroundImage: {
        "section-gradient":
          "linear-gradient(180deg, rgba(20,20,20,0.5) 0%, rgba(10,10,10,0.95) 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(20,20,20,0.95) 0%, rgba(28,28,28,0.7) 100%)",
        "subtle-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 255, 255, 0.03)",
        card: "0 8px 32px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
