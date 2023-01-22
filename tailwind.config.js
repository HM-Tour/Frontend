/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'petra': "url('https://i.postimg.cc/05V0qjJt/download123.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
}
