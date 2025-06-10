//postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano:process.env.NODE_ENV == 'production'?{ preset: ['default', { discardComments: { removeAll: true } }] }:false, // disable cssnano when not in production
  },
}
