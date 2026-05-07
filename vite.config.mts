import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  // السطر التالي هو الأهم لحل مشكلة الصفحة البيضاء
  base: '/GiteAubergeZahiBouiblane/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'robots.txt', 'icon-zahi.png', 'sitemap.xml'],
      manifest: {
        // تحديث الاسم للهوية الجديدة
        name: 'دار الضيافة زاهي بويبلان - Dar Diafa Zahi',
        short_name: 'دار الضيافة زاهي',
        description: 'موقع دار الضيافة زاهي بويبلان السياحي',
        theme_color: '#7c8a71',
        background_color: '#ffffff',
        display: 'standalone',
        // تحديث الرابط ليبدأ من مسار المشروع
        start_url: '/GiteAubergeZahiBouiblane/',
        icons: [
          {
            src: 'icon-zahi.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-zahi.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});