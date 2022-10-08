/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF5D73",
          "secondary": "#494949",
          "accent": "#7C7A7A",
          "neutral": "#000000",
          "base-100": "#F1EBEB"
        }
      }
    ]
  }
}
