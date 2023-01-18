/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'petra': "url('https://c4.wallpaperflare.com/wallpaper/445/597/251/petra-ancient-jordan-country-candles-wallpaper-preview.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
}
