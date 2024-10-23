/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-custom': '#5D3FD3',
        'dark-purple-custom': '#3d155f',
        'lime-custom': '#ccf381',
      },
    },
  },
  plugins: [],
};
