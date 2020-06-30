/*
 * @Author: 张平
 * @Date: 2019-03-08 14:52:21
 * @Last Modified by: 张平
 * @Last Modified time: 2019-09-04 12:31:02
 */

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** 环境变量配置
   */
  env: {},

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    '~assets/css/base.scss',
    '~assets/css/variables/fonts/iconfont.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/qs',
    '@/plugins/vue-lazyload',
    {
      src: '@/plugins/vue-quill-editor',
      ssr: false,
    },
    {
      src: '@/plugins/awesome-swiper',
      ssr: false,
    },
    '@/plugins/i18n.js',
    {
      src: '@/plugins/localStorage.js',
      ssr: false,
    },
    {
      src: '@/plugins/iconfont.js',
      ssr: false,
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  /*
   ** 配置全局scss，也可配置全局less
   */
  styleResources: {
    scss: './assets/css/variables.scss',
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Nuxt.js允许您将dist文件上传到CDN来获得最快渲染性能，只需将publicPath设置为CDN即可。
     ** 默认: '/_nuxt/'
     ** 当启动nuxt build时， 将.nuxt/dist/client目录的内容上传到您的CDN即可！
     */
    // publicPath: 'https://cdn.nuxtjs.org',

    /*
     ** 如果要使用Babel与特定的依赖关系进行转换，你可以在build.transpile中添加它们，transpile中的选项可以是字符串或正则表达式对象，用于匹配依赖项文件名。
     */
    transpile: [/^element-ui/],

    /*
     ** 使用Vue 服务器端渲染指南启用常见CSS提取。
     ** 将主块中的 CSS 提取到一个单独的 CSS 文件中（ 自动注入模板）， 该文件允许单独缓存文件。 当有很多共用 CSS 时建议使用此方法， 异步组件中的 CSS 将保持内联为JavaScript字符串并由vue - style - loader处理。
     */
    extractCSS: true,

    /*
     ** 隐藏log
     */
    terser: {
      terserOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
        },
      },
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
