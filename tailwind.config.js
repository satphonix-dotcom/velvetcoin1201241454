/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Avenir', 'sans-serif'],
        'heading': ['Hiragino Mincho ProN', 'serif'],
      },
      colors: {
        'luxury': {
          'black': '#000000',
          'charcoal': '#1A1A1A',
          'gray': {
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
          },
          'cream': '#F5F5DC',
          'gold': '#C6A55C',
          'gold-light': '#D4B872',
        }
      },
      height: {
        'hero': '600px',
      },
      spacing: {
        'section': '120px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}