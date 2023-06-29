/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['var(--font-noto)'],
        montserrat: ['var(--font-montserrat)'],
        slack: ['var(--font-slack)'],
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      animation: {
        fade: 'fade 1s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
