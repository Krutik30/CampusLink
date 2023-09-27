import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
            svgr(),
            VitePWA({ 
              registerType: 'prompt',
              workbox: {
                  globPatterns: ["**/*.{html,js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map}"],
                  maximumFileSizeToCacheInBytes: 10000000,
                  sourcemap: true
              },
              includeAssets:['/favicon.ico', '/favicon/apple-touch-icon.png', '/favicon/favicon-32x32.png'],
              manifest: {
                name: 'CampusLink',
                short_name: 'CampusLink',
                description: 'Your description here',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#007bff',
                icons: [
                  {
                    src: '/path/to/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                  },
                  {
                    src: '/path/to/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                  },
                ],
              },
            })
    ],
  
})
