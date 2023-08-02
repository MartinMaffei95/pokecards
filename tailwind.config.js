/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee Spice'],
      },
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
    require('tailwindcss-animated'),
  ],
};
