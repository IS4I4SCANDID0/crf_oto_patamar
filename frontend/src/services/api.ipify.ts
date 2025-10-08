// export const ipifyRequest = async () => {
//   const response = await fetch('https://api.ipify.org?format=json')
//   const { ip } = await response.json()

//   await fetch('http://localhost:4000/api/register-ip', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ ip })
//   })
// }

// // export default ipifyRequest

import axios from 'axios'

const apiIpify = axios.create({
	baseURL: 'https://api.ipify.org?format=json',
	timeout: 5000,
	// headers: { 'Content-Type': 'application/json' }
})

export default apiIpify
