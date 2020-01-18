# XITY Starter

A blog-ready 11ty starter based on PostCSS and Parcel, width RSS feed and Native Elements.

## Preconfigured tools

- [Eleventy](https://11ty.dev) for templates and site generation
- [PostCSS](https://postcss.org) and [PostCSS Preset Env](https://preset-env.cssdb.org) to process your CSS
- [PurgeCSS](https://www.purgecss.com/) for optimizing css output
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
