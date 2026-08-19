export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#020617",
          50: "#0f172a",
          100: "#1e293b",
          200: "#334155",
        },
        accent: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          emerald: "#10b981",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        borderRotate: {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
      },
      animation: {
        blob: "blob 14s infinite ease-in-out",
        float: "float 5s infinite ease-in-out",
        shimmer: "shimmer 4s infinite linear",
        pulseGlow: "pulseGlow 3s infinite ease-in-out",
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(139,92,246,0.06) 50%, rgba(16,185,129,0.05) 100%)",
        "section-gradient":
          "linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(2,6,23,0.8) 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.6) 100%)",
        "btn-gradient": "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #10b981 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(6, 182, 212, 0.15)",
        "glow-violet": "0 0 40px rgba(139, 92, 246, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
