module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./assets/js/**/*.js', './src/**/*.njk', './src/**/*.md'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
  ],
}
