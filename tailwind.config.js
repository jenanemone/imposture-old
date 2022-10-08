
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend:{
      colors:{
          "primary": "#FF5D73",
          "secondary": "#494949",
          "accent": "#7C7A7A",
          "neutral": "#000000",
          "base-100": "#F1EBEB"
      }
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
   
  }
}
