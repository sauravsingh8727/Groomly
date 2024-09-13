import createPlugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const TAILWIND_CONFIG = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,mdx}',
    './src/components/**/*.{js,jsx,mdx}',
    './src/app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: Array.from('123456789').reduce((acc, e) => {
        return Object.assign(acc, { [e]: e });
      }, {}),
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          blue: 'hsl(var(--primary-blue))',
          red: 'hsl(var(--primary-red))',
        },
        secondary: {
          blue: 'hsl(var(--secondary-blue))',
          gray: {
            DEFAULT: 'hsl(var(--secondary-gray))',
            dark: 'hsl(var(--secondary-gray-dark))',
            pale: 'hsl(var(--secondary-gray-pale))',
          },
        },
        blue: 'hsl(var(--blue))',
        charcoal: 'hsl(var(--charcoal))',
        white: 'hsl(var(--white))',
        black: 'hsl(var(--black))',
        mistake: 'hsl(var(--mistake))',
        success: 'hsl(var(--success))',
        gray: {
          DEFAULT: 'hsl(var(--gray))',
          dark: 'hsl(var(--gray-dark))',
          pale: 'hsl(var(--gray-pale))',
          light: 'hsl(var(--gray-white))',
        },
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        inter: 'var(--font-inter)',
      },
    },
  },
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    createPlugin(({ addUtilities }) => {
      addUtilities({
        '.absolute-center': {
          '@apply left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2': {},
        },
      });
    }),
  ],
};

export default TAILWIND_CONFIG;
