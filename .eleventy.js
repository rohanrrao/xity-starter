const htmlMinTransform = require('./utils/transforms/htmlmin.js')
const htmlDate = require('./utils/filters/htmlDate.js')
const date = require('./utils/filters/date.js')

module.exports = function(eleventyConfig) {
  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./assets/')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({ './static': '.' })

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */
  // human friendly date format
  eleventyConfig.addFilter('dateFilter', date)
  // robot friendly date format for crawlers
  eleventyConfig.addFilter('htmlDate', htmlDate)

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match
        },
      },
    },
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
