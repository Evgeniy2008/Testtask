import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/products': {
        target: 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace('/api/products', '/api/v1/products'),
      },
    },
  },
})
