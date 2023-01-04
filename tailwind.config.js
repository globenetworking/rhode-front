module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      strokeWidth: {
        '5': '5px',
      }
    },
  },
    plugins: [require("daisyui")],
}
