/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      },
      fontFamily: {
        OpenSans: ['var(--font-open-sans)'],
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
          },
        ],
        md: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.875rem',
          },
        ],

        'display-xs': [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],

        'display-sm': [
          '1.875rem',
          {
            lineHeight: '2.375rem',
          },
        ],

        'display-md': [
          '2rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '-0.045rem',
          },
        ],
        'display-lg': [
          '3rem',
          {
            lineHeight: '3.75rem',
            letterSpacing: '-0.06rem',
          },
        ],
        'display-xl': [
          '3.75rem',
          {
            lineHeight: '4.5rem',
            letterSpacing: '-0.075rem',
          },
        ],
        'display-2xl': [
          '4.5rem',
          {
            lineHeight: '5.625rem',
            letterSpacing: '-0.09rem',
          },
        ],
      },
      colors: {
        primary: {
          main: 'var(--foundation-primary-primary-500)',
          dark: 'var(--foundation-primary-primary-900)',
          light: 'var(--foundation-primary-primary-400)',
          50: 'var(--foundation-primary-primary-50)',
          100: 'var(--foundation-primary-primary-100)',
          200: 'var(--foundation-primary-primary-200)',
          300: 'var(--foundation-primary-primary-300)',
          400: 'var(--foundation-primary-primary-400)',
          500: 'var(--foundation-primary-primary-500)',
          600: 'var(--foundation-primary-primary-600)',
          700: 'var(--foundation-primary-primary-700)',
          800: 'var(--foundation-primary-primary-800)',
          900: 'var(--foundation-primary-primary-900)',
        },
        secondary: {
          main: 'var(--foundation-secondary-secondary-500)',
          dark: 'var(--foundation-secondary-secondary-900)',
          light: 'var(--foundation-secondary-secondary-400)',
          50: 'var(--foundation-secondary-secondary-50)',
          100: 'var(--foundation-secondary-secondary-100)',
          200: 'var(--foundation-secondary-secondary-200)',
          300: 'var(--foundation-secondary-secondary-300)',
          400: 'var(--foundation-secondary-secondary-400)',
          500: 'var(--foundation-secondary-secondary-500)',
          600: 'var(--foundation-secondary-secondary-600)',
          700: 'var(--foundation-secondary-secondary-700)',
          800: 'var(--foundation-secondary-secondary-800)',
          900: 'var(--foundation-secondary-secondary-900)',
        },
        tertiary: {
          main: 'var(--foundation-tertiary-tertiary-500)',
          dark: 'var(--foundation-tertiary-tertiary-900)',
          light: 'var(--foundation-tertiary-tertiary-400)',
          50: 'var(--foundation-tertiary-tertiary-50)',
          100: 'var(--foundation-tertiary-tertiary-100)',
          200: 'var(--foundation-tertiary-tertiary-200)',
          300: 'var(--foundation-tertiary-tertiary-300)',
          400: 'var(--foundation-tertiary-tertiary-400)',
          500: 'var(--foundation-tertiary-tertiary-500)',
          600: 'var(--foundation-tertiary-tertiary-600)',
          700: 'var(--foundation-tertiary-tertiary-700)',
          800: 'var(--foundation-tertiary-tertiary-800)',
          900: 'var(--foundation-tertiary-tertiary-900)',
        },
        neutral: {
          main: 'var(--foundation-neutral-neutral-500)',
          dark: 'var(--foundation-neutral-neutral-900)',
          light: 'var(--foundation-neutral-neutral-400)',
          0: 'var(--foundation-neutral-neutral-0)',
          50: 'var(--foundation-neutral-neutral-50)',
          100: 'var(--foundation-neutral-neutral-100)',
          200: 'var(--foundation-neutral-neutral-200)',
          300: 'var(--foundation-neutral-neutral-300)',
          400: 'var(--foundation-neutral-neutral-400)',
          500: 'var(--foundation-neutral-neutral-500)',
          600: 'var(--foundation-neutral-neutral-600)',
          700: 'var(--foundation-neutral-neutral-700)',
          800: 'var(--foundation-neutral-neutral-800)',
          900: 'var(--foundation-neutral-neutral-900)',
        },
        info: {
          main: 'var(--foundation-info-info-500)',
          dark: 'var(--foundation-info-info-900)',
          light: 'var(--foundation-info-info-400)',
          50: 'var(--foundation-info-info-50)',
          100: 'var(--foundation-info-info-100)',
          200: 'var(--foundation-info-info-200)',
          300: 'var(--foundation-info-info-300)',
          400: 'var(--foundation-info-info-400)',
          500: 'var(--foundation-info-info-500)',
          600: 'var(--foundation-info-info-600)',
          700: 'var(--foundation-info-info-700)',
          800: 'var(--foundation-info-info-800)',
          900: 'var(--foundation-info-info-900)',
        },
        success: {
          main: 'var(--foundation-success-success-500)',
          dark: 'var(--foundation-success-success-900)',
          light: 'var(--foundation-success-success-400)',
          50: 'var(--foundation-success-success-50)',
          100: 'var(--foundation-success-success-100)',
          200: 'var(--foundation-success-success-200)',
          300: 'var(--foundation-success-success-300)',
          400: 'var(--foundation-success-success-400)',
          500: 'var(--foundation-success-success-500)',
          600: 'var(--foundation-success-success-600)',
          700: 'var(--foundation-success-success-700)',
          800: 'var(--foundation-success-success-800)',
          900: 'var(--foundation-success-success-900)',
        },
        danger: {
          main: 'var(--foundation-danger-danger-500)',
          dark: 'var(--foundation-danger-danger-900)',
          light: 'var(--foundation-danger-danger-400)',
          50: 'var(--foundation-danger-danger-50)',
          100: 'var(--foundation-danger-danger-100)',
          200: 'var(--foundation-danger-danger-200)',
          300: 'var(--foundation-danger-danger-300)',
          400: 'var(--foundation-danger-danger-400)',
          500: 'var(--foundation-danger-danger-500)',
          600: 'var(--foundation-danger-danger-600)',
          700: 'var(--foundation-danger-danger-700)',
          800: 'var(--foundation-danger-danger-800)',
          900: 'var(--foundation-danger-danger-900)',
        },
        warning: {
          main: 'var(--foundation-warning-warning-500)',
          dark: 'var(--foundation-warning-warning-900)',
          light: 'var(--foundation-warning-warning-400)',
          50: 'var(--foundation-warning-warning-50)',
          100: 'var(--foundation-warning-warning-100)',
          200: 'var(--foundation-warning-warning-200)',
          300: 'var(--foundation-warning-warning-300)',
          400: 'var(--foundation-warning-warning-400)',
          500: 'var(--foundation-warning-warning-500)',
          600: 'var(--foundation-warning-warning-600)',
          700: 'var(--foundation-warning-warning-700)',
          800: 'var(--foundation-warning-warning-800)',
          900: 'var(--foundation-warning-warning-900)',
        },
      },
      boxShadow: {
        xs: 'var(--shadow-xs-box-shadow)',
        sm: 'var(--shadow-sm-box-shadow)',
        md: 'var(--shadow-md-box-shadow)',
        lg: 'var(--shadow-lg-box-shadow)',
        xl: 'var(--shadow-xl-box-shadow)',
        '2xl': 'var(--shadow-2-xl-box-shadow)',
        '3xl': 'var(--shadow-3-xl-box-shadow)',
      },
      blur: {
        sm: 'var(--backgroundblur-sm-backdrop-filter)',
        md: 'var(--backgroundblur-md-backdrop-filter)',
        lg: 'var(--backgroundblur-lg-backdrop-filter)',
        xl: 'var(--backgroundblur-xl-backdrop-filter)',
      },
    },
  },
  plugins: [],
}
