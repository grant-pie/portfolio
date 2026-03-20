// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Grant Pieterse — Front-End Developer',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Front-End Developer specialising in Vue, TypeScript and modern web technologies.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://grantpieterse.com/' },
        { property: 'og:title', content: 'Grant Pieterse — Front-End Developer' },
        { property: 'og:description', content: 'Front-End Developer specialising in Vue, TypeScript and modern web technologies.' },
        { property: 'og:image', content: 'https://grantpieterse.com/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://grantpieterse.com/' },
        { name: 'twitter:title', content: 'Grant Pieterse — Front-End Developer' },
        { name: 'twitter:description', content: 'Front-End Developer specialising in Vue, TypeScript and modern web technologies.' },
        { name: 'twitter:image', content: 'https://grantpieterse.com/og-image.png' }
      ]
    }
  }
})
