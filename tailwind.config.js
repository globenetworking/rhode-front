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
                  
          "secondary": "#6f4ef2",

          "texent": "#e3ddfc",
                  
          "accent": "#1D1933",
                  
          "neutral": "#3D4451",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
