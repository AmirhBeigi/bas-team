export default {
  target: 'static',
  head: {
    title: 'bas',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    '@/assets/css/main.css',
  ],
  plugins: [
    { src: '~/plugins/masonry', mode: 'client' },
    {
      src: './plugins/vue-slick-carousel.js',
    },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-gsap-module',
    '@nuxt/postcss8',
    '@nuxtjs/device',
  ],
  device: {
    refreshOnResize: true,
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: '/',
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
}
