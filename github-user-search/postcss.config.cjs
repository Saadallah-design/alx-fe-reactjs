// ❌ INCORRECT / OLD CONFIGURATION
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }


module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
};
// ✅ CORRECT CONFIGURATION (in postcss.config.js or similar)
// export default {
//   plugins: {
//     // 💡 Use the new dedicated PostCSS package for Tailwind
//     '@tailwindcss/postcss': {}, 
//     // Include Autoprefixer as well
//     'autoprefixer': {},
//   },
// };