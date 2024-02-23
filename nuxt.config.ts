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
   
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css'],
  app: {
    head: {
      title: 'MaskCodex - Enterprise Software Outsourcing',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'MaskCodex is a well-known technology company in Vietnam. The strengths focus mainly on designing and developing Websites, Landing pages, Mobile applications, and Outsourcing.' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'}
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
