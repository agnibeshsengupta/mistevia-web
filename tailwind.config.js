/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'blue': '#C5DFF8',
        'bluedark': '#3B3486',
        'green2': '#618264',
        'green3': '#B0D9B1',
        'green4': '#D0E7D2',
        'beige': '#EEE7DA',
        'beigedark': '#643843',
        'beige2': '#F3D7CA',
        'green1': '#13ce66',
        'yellow': '#BEFFF7',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'pink': '#E0AED0',
        'peach': '#FFE5E5',
        'orange': '#EE7214',
        'red': '#FF8F8F',
        'yellow': '#EEF296',
        'black': '#000',
        'white': '#fff',

      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [nextui()],
};
