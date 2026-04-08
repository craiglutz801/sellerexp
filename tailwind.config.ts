import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0c0f14',
          light: '#151922',
          muted: '#1e242d',
        },
        paper: '#f6f5f2',
        cream: '#eeebe6',
        accent: {
          DEFAULT: '#7CB9E8',
          light: '#9ecdf1',
          dark: '#5a9fd9',
          /** Very light panels / washes (pairs with paper) */
          soft: '#E8F3FA',
          /** Slightly deeper tint for hovers */
          muted: '#D4EAF7',
        },
        warm: {
          800: '#292524',
          600: '#57534e',
          500: '#78716c',
          400: '#a8a29e',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem, 3vw + 0.5rem, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'grid-subtle': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124, 185, 232, 0.12) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config
