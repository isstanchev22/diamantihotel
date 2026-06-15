import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split vendors so the big libraries cache independently from app code.
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'motion-vendor'
          }
          if (id.includes('lenis')) {
            return 'scroll-vendor'
          }
          if (id.includes('react') || id.includes('scheduler')) {
            return 'react-vendor'
          }
          return undefined
        },
      },
    },
  },
})
