import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gtd-viz/',
  plugins: [react(), svgrPlugin()],
  server: {
    open: true,
    host: '0.0.0.0',
  },
})
