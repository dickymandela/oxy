module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
          'regal-blue' : '#470C85',
      container: {
        center: true,
        padding: '1rem'
      }
      }
    },
  },
  plugins: [],
}
