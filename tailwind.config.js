/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // H&A Enterprises Color Palette
        primary: {
          navy: '#2C3E50',
          900: '#1A1F36',
        },
        accent: {
          teal: '#06B6D4',
          'teal-dark': '#0891B2',
        },
        background: {
          white: '#FFFFFF',
          light: '#F8FAFB',
          lighter: '#F0F4F8',
        },
        text: {
          dark: '#1F2937',
          medium: '#6B7280',
          light: '#9CA3AF',
          border: '#E8EBF0',
        },
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        xs: ['14px', { lineHeight: '1.5rem' }],
        sm: ['14px', { lineHeight: '1.5rem' }],
        base: ['16px', { lineHeight: '1.5rem' }],
        lg: ['18px', { lineHeight: '1.75rem' }],
        xl: ['20px', { lineHeight: '1.75rem' }],
        '2xl': ['24px', { lineHeight: '2rem' }],
        '3xl': ['32px', { lineHeight: '2.5rem' }],
        '4xl': ['48px', { lineHeight: '3rem' }],
      },
    },
  },
  plugins: [],
}
