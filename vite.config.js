import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Compress JPEG images
      mozjpeg: {
        quality: 80,
      },
      // Compress PNG images
      optipng: {
        optimizationLevel: 7,
      },
      // Convert to WebP
      webp: {
        quality: 80,
      },
    }),
  ],
})
