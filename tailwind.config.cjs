/**@type {import("tailwindcss").Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const spacing = {}
const minHeight = {}
const AVATAR_SPACING = 9
const fontSize = {}

spacing.avatar = `calc(var(--step-${AVATAR_SPACING}))`

minHeight['half-avatar'] = `calc(var(--step-${AVATAR_SPACING}) * 0.5)`
// Typography scales
for (let i = -2; i < 11; i++) {
  fontSize[`fluid-${i}`] = `var(--step-${i})`
}
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,mjs,cjs,astro,md,mdx,tsx}'],
  theme: {
    extend: {
      width: {
        article: '640px',
        content: '768px',
      },
      colors: {
        brand: 'var(--brand-hsl)',
        stroke: 'var(--stroke)',
        'text-1': 'var(--text1)',
        'text-2': 'var(--text2)',
        'surface-1': 'var(--surface1)',
        'surface-2': 'var(--surface2)',
        'surface-3': 'var(--surface3)',
        'surface-4': 'var(--surface4)',
        'brand-stroke': 'var(--stroke)',
        'surface-alpha': 'var(--surface-alpha)',
        accent: {
          DEFAULT: 'var(--brand-accent-hsl)',
          'text-1': 'var(--text1-accent)',
          'text-2': 'var(--text2-accent)',
          'surface-1': 'var(--surface1-accent)',
          'surface-2': 'var(--surface2-accent)',
        },
      },

      screens: {
        md: '640px',
        la: '768px',
      },
      spacing,
      minHeight,
      fontSize,
      gradientColorStops: {
        gradient: 'var(--brand-gradient)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.circle-shape': {
          shapeOutside: 'circle()',
        },

        '.rad-shadow': {
          boxShadow:
            '0 2.8px 2.2px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.03)), 0 6.7px 5.3px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + 0.01)), 0 12.5px 10px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + 0.02)), 0 22.3px 17.9px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.02)), 0 41.8px 33.4px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.03)), 0 100px 80px hsl(var(--surface-shadow-light) / var(--shadow-strength-light))',
        },
      })
    }),
  ],
}
