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
      animation: {
        typewriter: 'typewriter 2.5s steps(24) 500ms forwards',
        blink: 'blink 750ms steps(24) infinite',
      },
      keyframes: {
        typewriter: {
          'to': { left: '100%' },
        },
        blink: {
          'to': { background: 'transparent' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}