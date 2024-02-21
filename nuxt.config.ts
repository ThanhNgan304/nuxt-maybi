// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-anime',
    'nuxt-primevue',
    'nuxt-aos'
  ],
  primevue: {
      directives: {
          include: ['AnimateOnScroll']
      }
  },
  app: {
    head: {
      title: 'MaskCodex - Enterprise Software Outsourcing',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'MaskCodex is a well-known technology company in Vietnam. The strengths focus mainly on designing and developing Websites, Landing pages, Mobile applications, and Outsourcing.' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'}
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },
  imports: {
    dirs: ['store','utils']
  },

})
