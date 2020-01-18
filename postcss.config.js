const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/assets/js/**/*.js',
    './src/site/**/*.njk',
    './src/site/**/*.md',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    require('postcss-reporter')({
      clearReportedMessages: true
    }),
  ],
}
