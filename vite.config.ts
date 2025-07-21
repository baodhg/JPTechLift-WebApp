import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/JPTechLift-WebApp/', // ✅ Đường dẫn base cho GitHub Pages
  plugins: [react()],
  server: {
    host: true
  }
})
