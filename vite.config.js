import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/youtube', // Important for GitHub Pages and your local dev under /youtube/
})
