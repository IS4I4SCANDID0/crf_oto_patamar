// ! CORRIGIR A ESTILOZAÇÃO DESSE COMPONENTE
// 'use client'
// import { useEffect } from 'react'
// // import apiIpify from '@/services/api.ipify'
// import apiBackend from '@/services/api.backend'
// import readIpAddress from '@/functions/registerIpAddress'
// import { ImUsers } from 'react-icons/im'
// import useMainStore from '@/store/main.store'
// // import { useTheme } from 'next-themes'

// const VisitorsCounter = () => {
// 	const { visitors, setVisitors } = useMainStore()
// 	const preferecedTheme = localStorage.getItem('theme')

// 	useEffect(() => {
// 		const fetchAndReadIp = async () => {
// 			try {
// 				await readIpAddress()
// 				const { data } = await apiBackend.get('read-ip')
// 				console.log('Visitors counted totally:', data.count)
// 				setVisitors(data.count)
// 			} catch (error) {
// 				console.error('Error fetching IP address:', error)
// 			}
// 		}
// 		fetchAndReadIp()
// 	}, [setVisitors])

// 	return (
// 		<div className='w-5 h-5 flex justify-between self-center bg-blue-400'>
// 			<div className='w-fit h-fit relative'>
// 				{preferecedTheme === 'light' ? (
// 					<ImUsers size={20} color='#0a0a0a' className='' />
// 				) : (
// 					<ImUsers size={20} color='#f5f0e6' />
// 				)}

// 				<span className='w-2 h-2 absolute top-1.5 left-3.5 text-xs rounded-full bg-background flex items-center justify-center text-center '>
// 					{visitors ? visitors : '...'}
// 				</span>
// 			</div>
// 		</div>
// 	)
// }

// export default VisitorsCounter
