export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        '90': '90deg',
      },
      colors: {
       
        
      },
      fontFamily: {
        'jetbrains-mono': ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}