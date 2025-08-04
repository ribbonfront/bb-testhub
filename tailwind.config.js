// tailwind.config.js
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // เพิ่มสี custom ได้ที่นี่
        primary: '#1D4ED8',
        secondary: '#9333EA',
      },
      fontFamily: {
        // ตัวอย่างเพิ่มฟอนต์
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
