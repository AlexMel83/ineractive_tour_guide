import { defineNuxtConfig } from 'nuxt/config';
import 'dotenv/config';

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    compressPublicAssets: true,
    // preset:
    //   process.env.NUXT_PUBLIC_IS_DOCKER === 'true'
    //     ? 'node-server'
    //     : 'cloudflare-pages',
    preset: 'cloudflare-pages',
    static: process.env.NUXT_PUBLIC_IS_DOCKER === 'true' ? false : true,
    publicAssets: [
      {
        dir: 'public',
        maxAge: 60 * 60 * 24 * 365,
      },
    ],
    devProxy: {
      "/api/alerts": {
        target: "https://api.ukrainealarm.com/api/v3/alerts/1396",
        changeOrigin: true,
        headers: { "X-API-Key": "e3434354546456" }
      }
    }
  },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/errorHandler.js',
    '~/plugins/google-maps.js',
  ],
  build: {
    transpile: ['@nuxt/ui'], // if using Nuxt UI
  },
  devtools: { enabled: false },
  css: [  'leaflet.markercluster/dist/MarkerCluster.css','leaflet.markercluster/dist/MarkerCluster.Default.css','~/assets/src/tailwind.css', '~/assets/src/styles.css'],
  modules: [
    '@nuxt/ui',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/leaflet',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
      ],
      theme: {
        extend: {},
      },
    },
  },
  colorMode: {
    preference: 'light',
  },
  i18n: {
    locales: [
      { code: 'en', name: 'EN' },
      { code: 'uk', name: 'UA' },
    ],
    vueI18n: './i18n/i18n.config.ts',
    defaultLocale: 'uk',
    strategy: 'prefix_except_default',
      useCookie: false, 
      redirectOn: 'no',
      fallbackLocale: 'uk', 
    },
  app: {
    head: {
      htmlAttrs: {
        lang: 'uk',
      },
      meta: [
        { charset: 'UTF-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { name: 'robots', content: 'width=device-width, initial-scale=1' },
        { property: 'og:locale', content: 'uk_UA' },
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: 'The Council of the IDPs' },
        { name: 'google-site-verification', content: '4oenAoJxtD-JUqm5e3ajGvAigOo9BTUQluabs7_6jBY' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
          integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=',
          crossorigin: '',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icons/favicon.png',
        },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-SFWPTFCSK7',
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SFWPTFCSK7');
          `,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiKeyMapbox: process.env.APIKEY_MAPBOX,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || 'G-6RYNGNQ3ZB',
      apiBase: process.env.API_BASE_URL || 'https://api.memory.pp.ua',
      isDocker: process.env.NUXT_PUBLIC_IS_DOCKER || 'false',
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY
    },
  },
  compatibilityDate: '2025-01-29',
});
