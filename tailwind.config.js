/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',    // slate-900
          card: '#1e293b',  // slate-800
          text: '#f8fafc',  // slate-50
          accent: '#06b6d4' // cyan-500
        },
        light: {
          bg: '#f8fafc',    // slate-50
          card: '#ffffff',  // white
          text: '#0f172a',  // slate-900
          accent: '#2563eb' // blue-600
        }
      }
    },
  },
  plugins: [],
}
