import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/MyPortfolio-Website/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
