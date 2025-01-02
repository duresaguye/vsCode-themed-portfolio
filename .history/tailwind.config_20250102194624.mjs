export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2.5s steps(24) 500ms forwards',
        blink: 'blink 750ms steps(24) infinite',
      },
      keyframes: {
        typewriter: {
          '100%': {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            background: 'var(--accent-color)',
          },
          '100%': {
            background: 'transparent',
          },
        },
      },
      colors: {
        'bg-text': '#333', // Example for background text color
        'main-bg': '#111', // Example for main background color
        'accent-color': '#ff6600', // Example for accent color
      },
    },
  },
  plugins: [],
};
