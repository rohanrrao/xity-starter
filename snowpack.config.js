module.exports = {
  mount: {
    dist: '/',
    'src/assets/js': '/assets/js',
    'src/assets/css': '/assets/css',
  },
  plugins: [
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'ELEVENTY_ENV=production eleventy',
        watch: 'ELEVENTY_ENV=development eleventy --watch',
      },
    ],
  ],
  buildOptions: {
    clean: true,
  },
  devOptions: {
    out: 'dist',
    port: 3000,
    open: 'none',
    hmr: true,
  },
}
