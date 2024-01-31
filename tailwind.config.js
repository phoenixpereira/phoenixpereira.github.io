/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        custom: `2px 2px theme('colors.primary.500')`,
        'custom-hover': `1px 1px theme('colors.primary.500')`
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateRows: {'auto-250': 'repeat(auto-fill, 250px)'},
      gridTemplateColumns: {'4-minmax': 'repeat(4, minmax(150px, 1fr))'},
      colors: {
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        },
        darkslate: {
          50: '#3D3D3D',
          100: '#2C2C2C',
          200: '#262626',
          300: '#202020',
          400: '#1A1A1A',
          500: '#171717',
          600: '#141414',
          700: '#111111',
          800: '#0E0E0E',
          900: '#0B0B0B'
        },
        primary: {
          100: '#D2E4F0',
          200: '#A5C9E1',
          300: '#77AED2',
          400: '#4A93C3',
          500: '#1D78B4',
          600: '#166198',
          700: '#0F4D7C',
          800: '#092F60',
          900: '#021244',
        }
      }
    }
  },
  plugins: []
}
