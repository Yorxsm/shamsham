export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}