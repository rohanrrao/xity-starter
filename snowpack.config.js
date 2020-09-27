module.exports = {
  mount: {
    '.11ty': '/',
    src: '/_dist_',
    'src/assets/js': '/assets/js',
    'src/assets/css': '/assets/css',
  },
  plugins: [
    '@snowpack/plugin-postcss',
    ['@snowpack/plugin-webpack'],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
    [
      '@snowpack/plugin-optimize',
      {
        minify: true,
      },
    ],
  ],
  buildOptions: {
    clean: true,
  },
  devOptions: {
    out: 'dist',
    port: 3000,
    bundle: false,
    open: 'none',
    hmr: true,
  },
}
