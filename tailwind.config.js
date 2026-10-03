/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#FFFFFF',          // Clean Luxury White
          bgSecondary: '#F8FAFC', // Crisp Off-White/Pearl Slate
          surface: '#FFFFFF',     // Pure White
          card: 'rgba(255, 255, 255, 0.95)',
          cardHover: 'rgba(255, 255, 255, 1)',
          border: 'rgba(226, 232, 240, 0.9)',
          borderGlow: 'rgba(0, 212, 255, 0.4)',
          cyan: '#00B4D8',        // Rich Vibrant Cyan
          indigo: '#4F46E5',      // Royal Indigo
          purple: '#9333EA',      // Vivid Orchid
          gold: '#D97706',        // Warm Amber Gold
          emerald: '#059669',     // High-Converting WhatsApp Green
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'aurora-flow': 'auroraFlow 12s ease infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        auroraFlow: {
          '0%': { backgroundPosition: '0% 50%', transform: 'scale(1)' },
          '50%': { backgroundPosition: '100% 50%', transform: 'scale(1.08)' },
          '100%': { backgroundPosition: '0% 50%', transform: 'scale(1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.85', filter: 'blur(60px)' },
        },
        borderSpin: {
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
