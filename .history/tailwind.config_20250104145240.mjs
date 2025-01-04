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
        'main-bg': '#f0f0f0', 
        'text-color': '#333333',
        'accent-color': '#ff5733',
        'scrollbar-track-bg': '#e0e0e0',
        'scrollbar-thumb-bg': '#c0c0c0',
        'accent': '#ff5733',
        'sidebar-bg': '#333333', 
        'sidebar-hover-bg': '#444444', 
       
        
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