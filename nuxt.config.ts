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
      title: 'Maybi - Test Nuxt 3 chút',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim debitis illo, quas, amet omnis eum consequuntur repudiandae obcaecati iste ipsum repellat ea? Quidem in quis maxime qui, sapiente nulla.' },
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
