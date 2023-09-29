module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      maxHeight: {
        '128': '50rem',
      }, 
      screens: {
        'other1': {'min':'340px', 'max':'1200px'},
        'other2': {'min':'1155px'},
      }, 
      

    },
  },
  plugins: [],
}