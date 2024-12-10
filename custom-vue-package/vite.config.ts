import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
// https://vite.dev/config/
export default defineConfig({
  build:{
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      name:'index'
    },
    rollupOptions:{
      external: ["vue"],
      output: {
        globals: {
          Vue: 'vue'
        }
      }
    }
  },
  plugins: [vue(), dts({
    outDir: 'dist',
    staticImport: true,
    insertTypesEntry: true,
  })],
})
