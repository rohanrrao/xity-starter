const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./assets/js/**/*.js', './src/**/*.njk', './src/**/*.md'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
    }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
  ],
}
