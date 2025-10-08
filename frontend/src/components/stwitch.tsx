// 'use client'

// import { useTheme } from 'next-themes'
// import { useEffect, useState } from 'react'
// import { BsCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs';

// const Switch = () => {
// 	const { theme, setTheme } = useTheme()
// 	const [mounted, setMounted] = useState(false)

// 	useEffect(() => {
// 		setMounted(true)
// 	}, [])

// 	if (!mounted) return null

// 	const onCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setTheme(e.target.checked ? 'dark' : 'light')
// 	}

// 	return (
// 		<label htmlFor='switch' className='relative p-0 border border-amber-700'>
// 			{/* <CloudySunPixel /> */}
// 			<input
// 				type='checkbox'
// 				id='switch'
// 				name='switch'
// 				hidden
// 				className='peer'
// 				onChange={onCheckedChange}
// 				aria-label='Botão para alternar o tema entre claro e escuro'
// 				checked={theme === 'dark'}
// 				/>

// 			{/* Bolinha que desliza com emoji dentro */}
// 			<span className='absolute top-1 left-1 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-background flex items-center justify-center text-sm lg:text-lg text-center transition-transform duration-300 peer-checked:translate-x-5 lg:peer-checked:translate-x-6 peer-checked:bg-red-crf'>
// 				{/* {theme === 'light' ? '🌞' : '🌚'} */}
// 				{theme === 'light' ? <BsFillCloudSunFill color='#f5f0e6' /> : <BsCloudMoonFill color='#f5f0e6' />}
// 			</span>

// 			{/* Trilha do botão */}
// 			<span className='block h-6 w-12 md:h-8 md:w-14 rounded-full border border-red-crf bg-red-crf transition duration-300 ease-in-out peer-checked:border-background peer-checked:bg-background'></span>
// 		</label>
// 	)
// }

// export default Switch
