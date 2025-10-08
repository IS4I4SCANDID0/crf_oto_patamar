// import apiBackend from '@/services/api.backend'
// import apiIpify from '@/services/api.ipify'

// const readCountIpAddress = async () => {
// 	try {
// 		const response = await apiIpify.get('/')
// 		const { ip } = response.data

// 		await apiBackend.post('/register-ip', { ip })
// 		console.log('IP registered successfully')
// 	} catch (error) {
// 		console.error('Error registering IP:', error)
// 	}
// }

// export default readCountIpAddress
