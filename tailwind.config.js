/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        primary: '#3B82F6',
        secondary: '#1F2937',
      },
    },
  },
  plugins: [],
} 