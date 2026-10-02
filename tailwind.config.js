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
          bg: '#0A0E27',          // Deep Royal Sapphire (NOT plain black!)
          bgSecondary: '#0F1538', // Midnight Indigo
          surface: '#151C48',     // Frosted Sapphire Glass
          card: 'rgba(21, 28, 72, 0.65)',
          cardHover: 'rgba(30, 40, 100, 0.85)',
          border: 'rgba(99, 102, 241, 0.25)',
          borderGlow: 'rgba(0, 240, 255, 0.5)',
          cyan: '#00F0FF',        // Electric Cyan
          indigo: '#6366F1',      // Royal Indigo
          purple: '#A855F7',      // Vivid Orchid
          gold: '#F59E0B',        // Champagne Gold
          emerald: '#10B981',     // High-Converting WhatsApp Green
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
