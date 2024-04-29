import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import autoprefixer from 'autoprefixer'
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
      react(),
    babel()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/"),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  }
})