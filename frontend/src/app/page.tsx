// 'use client'
// import Footer from '@/components/footer'
// import Header from '@/components/header'
// import ProgressBar from '@/components/progressbar'
// import VisitorsCounter from '@/components/visitorsCounter'
// //import Image from "next/image";
// import useMainStore from '@/store/main.store'
// import { greetingMessage } from '@/utils/greetingMessage'
// import { useEffect } from 'react'

// const Home = () => {
// 	// const message = useMainStore(state => state.message)
// 	const { message, setMessage } = useMainStore()
// 	useEffect(() => {
// 		// const updateMessage = () => {
// 		// 	const msg = greetingMessage()
// 		// 	setMessage(msg)
// 		// }
// 		// updateMessage()

// 		// const timeout = setTimeout(updateMessage, 35000)
// 		// return () => clearTimeout(timeout)
// 		let interval: NodeJS.Timeout
// 		let timeout: NodeJS.Timeout

// 		const updateMessage = () => {
// 			const msg = greetingMessage()
// 			setMessage(msg)
// 		}
// 		updateMessage()

// 		const timeNow = new Date()
// 		const seconds = timeNow.getSeconds()
// 		const milisecondsToNextMinute = (60 - seconds) * 1000

// 		timeout = setTimeout(() => {
// 			updateMessage()
// 			interval = setInterval(updateMessage, 60000)
// 		}, milisecondsToNextMinute)

// 		return () => {
// 			clearTimeout(timeout)
// 			clearInterval(interval)
// 		}
// 	}, [setMessage])

// 	return (
// 		<>
// 			<Header />
// 			<main className='flex flex-col items-center justify-between py-14 text-foreground dark:text-background'>
// 				<div className='border-2 border-cyan-300 w-[90%] md:w-[75%] xl:w-[65%] px-0 py flex flex-col text-center gap-3.5 text-sm md:text-lg font-nunito-sans font-normal'>
// 					<p className='whitespace-pre-line leading-relaxed'>
// 						No coração da arquibancada, nasceu uma ideia ousada, Medir o nosso "deboche", com barra bem calibrada.
// 						Porque torcer pro Mengão não é só emoção, É viver em outro patamar, com fé e convicção.
// 					</p>

// 					<p className='whitespace-pre-line leading-relaxed'>
// 						Cada gol é um grito, cada drible é poesia, E a torcida vibra alto, dia após dia. Mas como saber se
// 						exageramos na empolgação? Criamos <span className='text-red-crf font-black'>O Medidor de Deboche</span> — a
// 						régua da paixão.
// 					</p>
// 				</div>
// 				<ProgressBar progress={60} />
// 				<p className='w-[90%] md:w-[75%] xl:w-[65%] pt-4 text-sm font-antonio'>{message}</p>
// 				<VisitorsCounter />
// 			</main>
// 			<Footer />
// 		</>
// 	)
// }

// export default Home
