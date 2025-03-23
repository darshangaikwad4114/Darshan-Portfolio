import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'icons/*.png',
        'assets/*.pdf',
        'images/*.{jpg,png}',
      ],
      manifest: {
        name: 'Darshan Gaikwad - Portfolio',
        short_name: 'Darshan',
        description: 'Portfolio website of Darshan Gaikwad, Frontend Developer specializing in React',
        theme_color: '#0090f5',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react', 'react-icons']
        }
      }
    }
  },
  // Add path aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
});
