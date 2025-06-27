module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#60a5fa',
          400: '#2563eb',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e293b',
          900: '#0f172a',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Emerald
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50: '#fffbea',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24', // Gold
          500: '#f59e42',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        success: {
          100: '#d1fae5',
          400: '#34d399', // Green accent
          600: '#059669',
        },
        white: '#ffffff',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
        'section-gradient': 'linear-gradient(90deg, #f0f6ff 0%, #ffffff 100%)',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
