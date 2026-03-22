import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    { pattern: /^(text|border|bg)-(violet|blue|amber|indigo|green|rose|teal|orange|cyan)-(400|500)$/ },
    { pattern: /^bg-(violet|blue|amber|indigo|green|rose|teal|orange|cyan)-500\/10$/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0f0f13',
          card: '#17171f',
          border: '#2a2a36',
        },
      },
    },
  },
  plugins: [typography],
}

export default config
