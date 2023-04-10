module.exports = {
  content: [
    'layouts/**/*.html',
    'content/**/*.html',
    'themes/**/static/js/*.js',
    'themes/**/*.html'
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
