/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eefaff',
          100: '#d9f2ff',
          200: '#bae9ff',
          300: '#85dcff',
          400: '#46c7ff',
          500: '#1aabff',
          600: '#0090f5',
          700: '#0073d9',
          800: '#0061b1',
          900: '#0a528e',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#eaeef5',
          200: '#d1dbe8',
          300: '#abbcd5',
          400: '#8097bc',
          500: '#6479a7',
          600: '#4f6089',
          700: '#414f70',
          800: '#36435d',
          900: '#30394e',
        }
      },
      spacing: {
        '18': '4.5rem',
      },
      lineHeight: {
        'relaxed': '1.75',
      },
    },
  },
  plugins: [],
};