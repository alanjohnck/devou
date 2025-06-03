// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 5s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
    },
  },
};
