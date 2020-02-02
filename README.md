![XITY Starter](https://repository-images.githubusercontent.com/234711727/72653800-4032-11ea-9b46-0b39dea20a22)

A blog-ready 11ty starter based on PostCSS and Parcel, width RSS feed and Native Elements.

## Preconfigured development tools

- [Eleventy](https://11ty.dev) for templates and site generation
- [PostCSS](https://postcss.org) and [PostCSS Preset Env](https://preset-env.cssdb.org) to process your CSS
- [CssNano](https://cssnano.co) to minimize, merge and optimize the CSS ouput
- [Parcel JS](https://parceljs.org) for a simple asset build pipeline

---

## Prerequisites

- [Node and NPM/YARN](https://nodejs.org/)

## Usage

You can download the scaffolding and start a new project with just one command:

```bash
npx degit https://github.com/equinusocio/xity-starter
```

This command will download the project to your corrent working directory and remove the `.github` and `.vscode` folders. Then you can install the required dependencies:

```bash
yarn install
```

### Running

This command will run `parcel` and the local server (with [BrowserSync](https://www.npmjs.com/package/browser-sync)) with auto reload.

```bash
yarn start
```

### Distributing

TO generate your static site/blog you can run this command to prepare assets and run optimisations for production.

```bash
yarn build
```

## Configurations

You can easily configure your site by changing the settings inside `src/_data/config.json`. Here the default settings you will get:

```js
{
  // Site name used as default site title
  "name": "Eleventy blog/site starter",

  // Short description used as default page description
  "shortDesc": "A starting point to make blogs and sites. It’s not a template.",

  // Default document language
  "lang": "en",

  // The default website base url
  "url": "localhost",

  // Social shares author username
  "authorHandle": "@equinusocio",

  // Social shares author name
  "authorName": "Mattia Astorino",

  // Tip payment url, if you want to monetize your site
  "paymentPointer": "$twitter.xrptipbot.com/equinusocio",

  // Code highlight theme, must reflect the file name inside /assets/css.
  // Remove to disable it
  "syntaxTheme": "prism-material-light.css",

  // CSS class applied to the "#" anchor elements inside headings
  "permalinkClass": "permalink",

  // CSS class applied to the iframes wrapper
  "iframesClass": "iframes-wrapper",

  // Filesystem folders. "blogdir" and "includes" must be relative to "src"
  "paths": {
    "src": "src",
    "blogdir": "blog",
    "includes": "components",
    "output": "dist"
  }
}
```
