const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
      colors: {
        primary:'#DC8723',
        secondary: {
          0: '#181818',
          100: '#373737'
        }
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url('/background.webp')",
        'about': "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),url('/background-about.webp')",
        'contact': "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),url('/background-contact.webp')"
      },
      flex: {
        'flex-mobile': '0 0 33.33%',
        'flex-desktop': '0 0 20%'
      },
      screens: {
        'xxs': '375px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
};
