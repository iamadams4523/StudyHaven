/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#F5FCFC',
        teal: '#36CFC9',
        lavender: '#F9F8FF',
        lightpurple: '#6C63FF',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to top right, #F5FCFC, #36CFC9, #F9F8FF)',
      },
      fontFamily: {
        sans: ['Balsamiq Sans', 'sans-serif'], // Use Balsamiq Sans font
      },
    },
  },
  plugins: [],
};
