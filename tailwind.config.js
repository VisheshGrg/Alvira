/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax':'url(../public/hero.jpg)',
        "decor":'url(../public/decor.jpeg)',
        "furniture":'url(../public/furniture.jpg)',
        "clothes":'url(../public/clothes.jpg)',
        "electronics":'url(../public/laptop.jpg)',
        "iphone":'url(../public/iphone.png)',
        "s24":'url(../public/s24.jpg)',
        "user":'url(../public/user.png)',
      },
      colors: {
        background: "#F1F2F2",
        text: "#000000",
        text_gray: "#636363",
        text_hover:"#C19A83",
        card:"#F1F3F2",
        card_light:"#636363"
      },
      fontFamily: {
        oswald : ["Oswald", "sans-serif"]
      },
      fontSize:{
        headingXL : 70,
        headingL : 50,
        heading : 35,
        link : 14,
        linksm:12,
        normal : 20,
        small : 15

      }
    },
  },
  plugins: [],
}
