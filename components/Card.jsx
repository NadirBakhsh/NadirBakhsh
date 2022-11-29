import React from 'react'
import Image from 'next/image'
import { Poppins } from '@next/font/google'


const poppins = Poppins({
	weight: ['400', '500','700'], 
	variable: '--font-poppins',
	subsets: ['latin']
})

const Card = () => {

	return (
		<>
			<div className='card w-full max-w-[800px] h-auto md:h-[400px] rounded-xl lg:rounded-2xl'>
				<div className='card-body text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between flex-1 p-6 md:p-14'>
					<span className='profile-img w-[200px] h-[200px] bg-[#848C90] rounded-full md:rounded-md'></span>
					<span className='about-content  flex-1 w-full h-full'>
						<h1 className={`text-[32px] lg:text-[40px] ${poppins.variable} font-bold leading-[40px]`}>Nadir Bakhsh</h1>
						<h2 className={`text-[18px] ${poppins.variable} font-medium leading-8 `}>Software Engineer</h2>
						<p className={`text-[14px] md:text-[17px] leading-[23px] mt-3 ${poppins.variable}`}>
							Hey there 👋 I'm an entrepreneur and software developer, I am focused on building <span className='font-semibold italic	'> leading page, Brand
							Identity, Web Application, Mobile App and software </span> for the start-ups or cooperative business companies.
							Feel free to checkout my work via the links below or contact me with questions.
						</p>
					</span>
				</div>
				<div className='card-footer'>
					<span className='portfolio-link'></span>
					<span className='contact-link'></span>
				</div>
			</div>
		</>
	)
}

export default Card
