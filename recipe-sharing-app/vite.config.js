import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'; // <--- 1. Import path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // <--- 3. Define the alias
    },
  },
})
