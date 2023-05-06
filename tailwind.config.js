/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * Font Scale
 * Can be adjusted using the link below.
 * @link https://utopia.fyi/type/calculator/?c=320,16,1.2,1848,16,1.38,6,0,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l
 */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    './assets/scss/**/*.scss',
    './pages/**/*.{js,vue}',
    './components/**/*.{js,vue}',
    './layouts/**/*.{js,vue}'
  ],
  theme: {
    fontFamily: {
      sans: ['Gilroy', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      '2xs': [
        'clamp(0.80rem, calc(0.80rem + 0.00vw), 0.90rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ],
      xs: [
        'clamp(1.00rem, calc(1.00rem + 0.00vw), 1.00rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ],
      sm: [
        'clamp(1.20rem, calc(1.16rem + 0.19vw), 1.38rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ],
      base: [
        'clamp(1.35rem, calc(1.34rem + 0.49vw), 1.625rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ],
      lg: [
        'clamp(1.73rem, calc(1.54rem + 0.94vw), 2.63rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ],
      xl: [
        'clamp(2.07rem, calc(1.75rem + 1.63vw), 3.63rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ],
      '2xl': [
        'clamp(2.49rem, calc(1.96rem + 2.64vw), 5.01rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ],
      '3xl': [
        'clamp(2.99rem, calc(2.17rem + 4.11vw), 6.91rem)',
        {
          lineHeight: 'calc(100% + 10px)'
        }
      ]
    },
    screens: {
      '2xs': '23em',
      xs: '25.625em',
      sm: '30em',
      'sm-md': '35em',
      md: '43.125em',
      lg: '54.875em',
      xl: '79.6875em',
      '2xl': '90em',
      '3xl': '100em',
      max: '1848px'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        inherit: 'inherit',
        white: '#fff',
        black: '#222222',
        lcygray: {
          DEFAULT: '#2F2F30',
          50: '#8A8A8D',
          100: '#808082',
          200: '#6C6C6E',
          300: '#575759',
          400: '#434345',
          500: '#2e2e2e',
          600: '#131314',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        green: {
          DEFAULT: '#00FF2E',
          50: '#B8FFC4',
          100: '#A3FFB4',
          200: '#7AFF92',
          300: '#52FF71',
          400: '#29FF4F',
          500: '#00FF2E',
          600: '#00C724',
          700: '#008F1A',
          800: '#005710',
          900: '#001F06'
        },
        cyan: {
          DEFAULT: '#00BCFF',
          50: '#B8ECFF',
          100: '#A3E7FF',
          200: '#7ADCFF',
          300: '#52D1FF',
          400: '#29C7FF',
          500: '#00BCFF',
          600: '#0093C7',
          700: '#00698F',
          800: '#004057',
          900: '#00171F'
        }
      },
      spacing: {
        '1/2': '50%',
        '3/2': '150%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        max: '999em',
        '50vw': '50vw',
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/5': '3 / 5',
        '4/5': '4 / 5',
        '5/6': '5 / 6',
        '1/2': '1 / 2',
        landscape: '383 / 235',
        '2/3': '2 / 3'
      },
      outlineWidth: {
        3: '3px'
      },
      zIndex: {
        '-1': -1
      },
      inset: (theme, { negative }) => ({
        ...theme('spacing'),
        ...negative(theme('spacing'))
      }),
      maxWidth: (theme) => ({
        ...theme('spacing')
      }),
      minHeight: (theme) => ({
        ...theme('spacing')
      })
    }
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}