import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    // Lets pre-rendered pages and hydration agree on date-dependent text
    __BUILD_TIME__: JSON.stringify(Date.now()),
  },
})
