import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404-html',
      closeBundle() {
        const distIndex = path.resolve(__dirname, 'dist/index.html')
        const dist404 = path.resolve(__dirname, 'dist/404.html')
        if (fs.existsSync(distIndex)) {
          fs.copyFileSync(distIndex, dist404)
          console.log('✓ Successfully copied index.html to 404.html for static routing fallback.')
        }
      }
    }
  ],
  // Ensure SSR build resolves packages using Node conditions
  resolve: {
    conditions: ['module', 'node', 'import', 'default'],
  },
  build: {
    outDir: 'dist',
  },
})
