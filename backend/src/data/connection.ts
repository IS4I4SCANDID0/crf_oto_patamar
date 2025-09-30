// import Database from 'better-sqlite3'
// import path from 'path'
// import fs from 'fs'
// import { fileURLToPath } from  'url'
// import type BetterSqlite3 from 'better-sqlite3'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)

// const dbFolderPath = __dirname
// if(!fs.existsSync(dbFolderPath)){
//   fs.mkdirSync(dbFolderPath, { recursive: true })
// }

// const dbFilePath = path.resolve(dbFolderPath, 'visitors.db')

// const db: BetterSqlite3.Database = new Database(dbFilePath, { verbose: console.log })
// // console.log('**local do arquivo sqlite**',db )
// db.prepare(
//   `
//     CREATE TABLE IF NOT EXISTS visitors_ip_address (
//       id INTEGER PRIMARY KEY AUTOINCREMENT, 
//       ip_address TEXT,
//       access_at TEXT
//     )
//   `
// ).run()

// export default db