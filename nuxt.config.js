module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pvdank',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/cxo1efx.css' },
      { rel: 'stylesheet', type: 'text', href: '~/assets/main.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    'assets/main.css'
  ],
  loading: { color: '#4CD088' },
  router: {
    middleware: ['pages']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
