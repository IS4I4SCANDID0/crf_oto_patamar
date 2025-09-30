// import http from 'http'
// import { createIpService } from '../api/routes/createIpAddress'
// import { readIpService } from '../api/routes/readIpAddress'

// const server = http.createServer((req, res) => {
//   const { method, url } = req

//   if (method === 'POST' && url === '/api/register-ip') {
//     createIpService(req, res)
//   } else if (method === 'GET' && url === '/api/read-ip') {
//     readIpService(req, res)
//   } else {
//     res.writeHead(404, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify({ error: 'Rota não encontrada, tente' }))
//   } 
// })

// const PORT = 4000
// server.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`)
// })