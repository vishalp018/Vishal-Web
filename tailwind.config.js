// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '33%': { transform: 'scale(1.15) translate(10px, -10px)' },
          '66%': { transform: 'scale(0.9) translate(-10px, 10px)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        float: 'float 6s infinite ease-in-out',
        shimmer: 'shimmer 3s infinite linear',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.12) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.12) 100%)',
      },
    },
  },
  plugins: [],
};
