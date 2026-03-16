import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path: set via env variable for flexible deployment
// GitHub Pages: VITE_BASE_PATH=/MyPortfolio-Website/
// Vercel:       (no env var needed, defaults to /)
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
