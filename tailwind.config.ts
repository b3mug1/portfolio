import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        surface: "#111827",
        primary: "#3B82F6",
        accent: "#8B5CF6",
        text: "#F8FAFC",
        muted: "#94A3B8"
      },
      fontFamily: {
        sans: ["Geist", "Inter", "Satoshi", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.35)",
        card: "0 12px 28px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.16) 1px, transparent 0)",
        "aurora": "linear-gradient(120deg, rgba(59,130,246,0.28), rgba(139,92,246,0.24), rgba(16,185,129,0.2))"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSlow: "pulseSlow 6s ease-in-out infinite",
        gradientShift: "gradientShift 12s ease infinite"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSlow: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.75" }
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
