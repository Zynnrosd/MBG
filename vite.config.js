import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'LOGORN.png'],
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'SIGAP Gizi',
        short_name: 'SIGAP Gizi',
        description: 'Sistem Informasi Gizi Anak Pintar',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: '/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },

      server: {
        proxy: {
          '/api-wilayah': {
            target: 'https://wilayah.id/api',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api-wilayah/, '')
          }
        }
      },
      
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    })
  ],
})
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(), tailwindcss(),({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'LOGORN.png'],
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Resep Nusantara',
      short_name: 'Resep Nusantara',
      description: 'Aplikasi Resep Makanan dan Minuman Khas Indonesia',
      theme_color: '#2563eb',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      orientation: 'portrait',
      icons: [
        {
          src: '/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})

>>>>>>> 8db79ea4a2f3e842d03b12812063d89fbf5596e9
