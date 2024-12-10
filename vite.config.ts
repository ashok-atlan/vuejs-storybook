import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'custom-vue-package': './custom-vue-package/dist/',  // Make sure the path is correct
    },
  },
})
