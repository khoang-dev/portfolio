import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
// import viteCompression from 'vite-plugin-compression'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }) // Enabled by default,
    // viteCompression({
    //   verbose: true, // Optional: log compressed files
    //   disable: false, // Enable the plugin
    //   threshold: 10240, // Minimum file size to compress (in bytes)
    //   algorithm: 'gzip' // Use 'gzip' or 'brotliCompress'
    // })
    // vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
