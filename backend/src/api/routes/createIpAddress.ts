// import type { IncomingMessage, ServerResponse } from 'http'
// import db from '../../data/connection.js'

// export const createIpService = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
//   // let body = ''
//   // req.on('data', (chunk)  => {
//   //   body += chunk
//   // })
//   // req.on('end', () => {
//   //   try {
//   //     const { ip } = JSON.parse(body)
//   //     const accessAt = new Date().toISOString()
      
//   //     const existingIp = db.prepare(`
//   //       SELECT COUNT(*) AS toal FROM visitors_ip_address WHERE ip_address = ?
//   //     `).get(ip) as { total: number }
    
//   //     if(existingIp.total >= 0) {
//   //       db.prepare(`
//   //         INSERT INTO visitors_ip_address (ip_address, access_at)
//   //         VALUES (?, ?)  
//   //       `).run(ip, accessAt)
//   //     }
          
//   //     res.writeHead(201, { 'Content-Type': 'application/json' })
//   //     res.end(JSON.stringify({ message: 'IP registered successfully', ip, accessAt }))
//   //   } catch (error: unknown) {
//   //     res.writeHead(500, { 'Content-Type': 'application/json' })
//   //     res.end(JSON.stringify({ error: 'Error registering IP:' })) 
//   //     console.error(error)
//   //   }
//   // })
// }