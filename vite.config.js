import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    cors: true,
    // Vite 6: allow all hosts so the axe MCP headless browser can reach the dev server
    allowedHosts: 'all',
    headers: {
      // Permit axe-core script injection from the MCP server's browser context
      'Access-Control-Allow-Origin': '*',
      // No CSP — axe needs to inject scripts at runtime
      'Content-Security-Policy': '',
    },
  },
})
