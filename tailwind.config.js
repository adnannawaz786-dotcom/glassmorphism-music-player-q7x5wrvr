```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '3px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
```