import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// FIX: Use the specific named export { ViteImageOptimizer }
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    ViteImageOptimizer({
      // 1. GLOBAL SETTINGS (Optional - defaults are usually fine)
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i, // Regex for files to process
      
      // 2. JPEG/JPG SETTINGS (The most important part for photos)
      // Quality is 0 (worst) to 100 (best)
      jpg: {
        quality: 75, // Lower this number for smaller files, raise for better quality
      },
      jpeg: {
        quality: 75,
      },
      
      // 3. PNG SETTINGS
      png: {
        // use 'p' to enable PNG quantization (more aggressive compression)
        // If not set, it uses 'oxipng' (better quality)
        // quality: [0.8, 0.9], // lossy compression range
      },
      
      // 4. WEBP SETTINGS
      webp: {
        quality: 80, // WebP is inherently smaller, so you can keep this higher
      },

      // 5. SVG SETTINGS (Uses SVGO)
      // Defaults are often good, but you can override them here:
      svgo: true,
    }),
  ],
  build: {
    assetsInlineLimit: 0, // Set to 0 to ensure all images are treated as assets
  },
})