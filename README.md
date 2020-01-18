# Eleveny Starter

A project scaffold for quickly starting a site build with:

- [Eleventy](https://11ty.dev) for templates and site generation
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow
- [PurgeCSS](https://www.purgecss.com/) for optimizing css output
- [Parcel JS](https://parceljs.org) for a simple asset build pipeline

---

## Prerequisites

- [Node and NPM/YARN](https://nodejs.org/)

## Running locally

```bash
# install the project dependencies
yarn

# run the build and server locally
yarn start

# run the production build
yarn build
```

### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello
