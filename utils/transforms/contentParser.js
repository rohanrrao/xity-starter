const jsdom = require('@tbranyen/jsdom')
const { JSDOM } = jsdom
const slugify = require('slugify')

module.exports = function(value, outputPath) {
  if (outputPath.endsWith('.html')) {
    /**
     * create the document model
     */
    const DOM = new JSDOM(value, {
      resources: 'usable',
    })
    const document = DOM.window.document

    /**
     * Get all the images from the post
     */
    const images = [...document.querySelectorAll('main article img')]
    if (images.length) {
      images.forEach(image => {
        /**
         * Set the loading attribute to all
         * the images to be lazy loaded if supported
         */
        image.setAttribute('loading', 'lazy')
        /**
         * Replace images with title with figure and figcaption
         */
        if (image.hasAttribute('title')) {
          /**
           * Create figure and figcaption elements
           */
          const figure = document.createElement('figure')
          const figCaption = document.createElement('figcaption')
          /**
           * Set figcaption content from image title
           * then remove the title attribute
           */
          figCaption.innerHTML = image.getAttribute('title')
          image.removeAttribute('title')
          /**
           * Clone image inside figure
           * and add the figcaption element
           */
          figure.appendChild(image.cloneNode(true))
          figure.appendChild(figCaption)
          /**
           * Replace the original image with title
           * with the generated figure
           */
          image.replaceWith(figure)
        }
      })
    }
    /**
     * Get all the headings inside the post
     */
    const articleHeadings = [
      ...document.querySelectorAll(
        'article h2, article h3, article h4, article h5, article h6'
      ),
    ]
    if (articleHeadings.length) {
      /**
       * Create an ahcor element inside each post heading
       * to link to the secion
       */
      articleHeadings.forEach(heading => {
        // Create the anchor element
        const anchor = document.createElement('a')
        // Create the anchor slug
        const headingSlug = slugify(heading.textContent.toLowerCase())
        // Set the anchor href based on the generated slug
        anchor.setAttribute('href', `#${headingSlug}`)
        // Add class and content to the anchor
        anchor.classList.add('permalink')
        anchor.innerHTML = '#'
        // Set the ID attribute with the slug
        heading.setAttribute('id', `${headingSlug}`)
        // Appen che anchor element to the heading
        heading.appendChild(anchor)
      })
    }
    /**
     * Get all the iframes inside the article
     * and wrap them inside a class
     */
    const articleEmbeds = [...document.querySelectorAll('main article iframe')]
    if (articleEmbeds.length) {
      articleEmbeds.forEach(embed => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('iframes-wrapper')
        wrapper.appendChild(embed.cloneNode(true))
        embed.replaceWith(wrapper)
      })
    }
    return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML
  }
  return value
}
