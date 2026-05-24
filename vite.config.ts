import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const kuiDist = resolve(__dirname, '../kui/packages/lib/dist')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: [
      { find: '@khelahobe/kui/styles', replacement: resolve(kuiDist, 'style.css') },
      { find: '@khelahobe/kui/cpdb',   replacement: resolve(kuiDist, 'cpdb.js') },
      { find: '@khelahobe/kui',        replacement: resolve(kuiDist, 'index.js') },
    ],
  },
})
