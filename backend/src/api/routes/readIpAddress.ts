import type { IncomingMessage, ServerResponse } from 'http'
import db from '../../data/connection.js'

export const readIpService = (_req: IncomingMessage, res: ServerResponse): void => {
  try {
    const result = db.prepare(`
      SELECT COUNT(DISTINCT ip_address) AS visitors_count FROM visitors_ip_address
    `).get() as { visitors_count: number }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ count: result.visitors_count }))

  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Error counting IP addresses' }))
    console.error(error)
  }
}