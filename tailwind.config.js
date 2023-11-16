/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear-bg-home': 'linear-gradient(180deg, rgba(5, 11, 19, 0.00) 40.94%, #03080F 84.31%)',
      },
      colors: {
        'custom': {
          'almost-black': '#02070E',
          'black-pearl': '#0D1623',
          'blue-zodiac': '#1A2A42',
          'dark-blue-grey':'#243754',
          'light-green-blue': '#4FF39B',
          'periwinkle-blue': '#89A3FF',
          'iceberg': '#D8EFFC'
        }
      }
    },
    
  },
  plugins: [],
}
