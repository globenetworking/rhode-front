module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#131129",

          "primary-light": "#1D1933",
                  
          "secondary": "#6f4ef2",

          "twhite": "#fff",

          "tcream": "#e3d7ef",

          "tgray": "#6d7e7e",
        },
        anodatheme: {
        
          "primary": "#131129",

          "primary-light": "#1D1933",
                  
          "secondary": "#6f4ef2",

          "twhite": "#fff",

          "tcream": "#e3d7ef",

          "tgray": "#6d7e7e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
