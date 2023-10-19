/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        
        big: { max: '969px' },
        // => @media (max-width: 969px) { ... }
        med: { max: '769px' },
        // => @media (max-width: 767px) { ... }

        sml: { max: '639px' },
        // => @media (max-width: 639px) { ... }


      }
    },
  },
  plugins: [],
}