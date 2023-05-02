/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '641px',
      lg: '992px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Zen Kaku Gothic New', 'sans-serif'],
      serif: ['Zilla Slab', 'serif']
    },
    extend: {
    },
  },
  plugins: [],
};
