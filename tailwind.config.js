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
        'gradient-radial-home': 'radial-gradient(48.17% 120.71% at 11.25% 11.29%, rgba(137, 163, 255, 0.17) 0%, rgba(2, 7, 14, 0.00) 86.3%)',
        'text-gradient': 'linear-gradient(262deg, #89A3FF -16.98%, #4FF39B 206.62%)',
        'saturated-gradient': 'linear-gradient(262deg, #00d5ff -16.98%, #00ff95 206.62%)',
        'article-gradient': 'linear-gradient(180deg, rgba(13, 22, 35, 0.00) 0%, #0D1623 23.44%)',
        'border-gradient': 'radial-gradient(93.25% 104.46% at 33.38% 0%, rgba(36, 55, 84, 0.00) 49.48%, #243754 100%)',
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
