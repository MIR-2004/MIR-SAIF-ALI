import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmail } from './api/sendContact'

function contactApiPlugin() {
  return {
    name: 'contact-api',
    configureServer(server: { middlewares: { use: (fn: (req: any, res: any, next: () => void) => void) => void } }) {
      // Load .env when dev server starts so RESEND_API_KEY is available
      const env = loadEnv('development', process.cwd(), '')
      Object.assign(process.env, env)
      server.middlewares.use((req: any, res: any, next: () => void) => {
        const path = req.url?.split('?')[0]
        if (path !== '/api/contact') return next()

        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
          res.statusCode = 200
          res.end()
          return
        }

        if (req.method !== 'POST') {
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk: Buffer) => { body += chunk.toString() })
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}')
            const result = await sendContactEmail(data)
            res.setHeader('Content-Type', 'application/json')
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.statusCode = 'error' in result
              ? (result.error.includes('required') ? 400 : 500)
              : 200
            res.end(JSON.stringify('error' in result ? { error: result.error } : { success: true, id: result.id }))
          } catch {
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 500
            res.end(JSON.stringify({ error: 'Invalid request' }))
          }
        })
        req.on('error', () => next())
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
})
