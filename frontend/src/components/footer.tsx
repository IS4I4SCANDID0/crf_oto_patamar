import { PiTerminalWindowThin } from 'react-icons/pi'
import type { JSX } from 'react'

const Footer = (): JSX.Element => {
	return (
		<footer className='min-w-svw h-12 lg:h-14 flex gap-9 items-center justify-center self-end relative bottom-0 font-antonio text-sm md:text-base lg:text-lg text-white dark:text-white bg-[url(/images/Flamengo_torcida.jpg)] bg-center bg-cover p-4 text-center'>
			<p className='flex gap-1'>
				&copy; {new Date().toLocaleDateString('pt-BR', { year: 'numeric' })} Isaias Candido
				<PiTerminalWindowThin size={20} className='mt-[0.1 px] md:mt-[7px]' />
			</p>
		</footer>
	)
}

export default Footer
