import React from 'react'
import Image from 'next/legacy/image'
import { Poppins, Nunito } from '@next/font/google'


const poppins = Poppins({
	weight: ['400', '500','700'], 
	className: '--font-poppins',
	subsets: ['latin']
})

const nunito = Nunito({
	weight: ['400', '500','700'], 
	className: '--font-nunito',
	subsets: ['latin']
})

const Card = () => {

	return (
		<>
			<div className='card w-full max-w-[800px] h-auto md:h-[400px] rounded-xl lg:rounded-2xl'>
				<div className='card-body text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between flex-1 p-6 md:p-14'>
					<span className='profile-img overflow-hidden  w-[200px] h-[200px] bg-[#848C90] rounded-full md:rounded-md'>
						<Image layout='responsive'   width={200} height={200} src={'/me.jpeg'} alt='my-image' />
					</span>
					<span className='about-content  flex-1 w-full h-full'>
						<h1 className={`text-[32px] lg:text-[40px] ${poppins.className} font-bold leading-[40px]`}>Nadir Bakhsh</h1>
						<h2 className={`text-[18px] ${poppins.className} font-medium leading-8 `}>Software Engineer</h2>
						<p className={`text-[14px] md:text-[14px] leading-[23px] mt-3 ${poppins.className}`}>
							Hey there 👋 I'm an entrepreneur and software developer, I am focused on building <span className='font-semibold  tracking-wider'> leading page, Brand
							Identity, Web Application, Mobile Apps and software </span> for the start-ups or cooperative business companies.
							Feel free to checkout my work via the links below or contact me with questions.
						</p>
					</span>
				</div>
				<div className={`card-footer flex justify-between items-center px-6 md:px-14 ${nunito.className} font-semibold`}>
					<span
					onClick={() => window.open('https://shiny-starship-524732.netlify.app/', '_blank')} 
					className={`portfolio-link`}
					>
						<span>Visit My Portfolio</span>
						<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
					</span>
					<span 
					onClick={() => window.open('mailto:nadir4k2010@gmail.com', '_blank')} 
					className='contact-link'
					>
						<i className="fa fa-envelope-o" aria-hidden="true"></i>
						<span> Contact Me </span>
					</span>
				</div>
			</div>
		</>
	)
}

export default Card
