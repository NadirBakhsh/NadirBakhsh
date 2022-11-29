const Footer = () => {
	const OnLinkOpen = (link) => {
		window.open(link, '_blank')
	}

	return (
		<footer
			className={`h-auto md:h-16 flex flex-col-reverse md:flex-row justify-between items-center py-6 md:py-0 px-6`}>
			<span className='text-[12px] md:text-[16px] text-[#fff] mt-4'>© 2022 Updated Version </span>

			<div className='contactInfo'>
				<span onClick={() => OnLinkOpen('https://www.linkedin.com/in/nadir-bakhsh-39807413a/')} target='_blank'>
					<i className='fa fa-linkedin-square' aria-hidden='true'></i>
				</span>
				<span onClick={() => OnLinkOpen('https://www.facebook.com/nadir.bakhsh')} target='_blank'>
					<i className='fa fa-facebook-official' aria-hidden='true'></i>
				</span>
				<span
					onClick={() =>
						OnLinkOpen(
							'https://www.instagram.com/nadir_bakhsh_1/?fbclid=IwAR0KIxazOUvEWjccmKyTXhrmXOUlI0uFgdOqCtf7yHJZ5xd6cgLqkEW4DXA'
						)
					}
					target='_blank'>
					<i className='fa fa-instagram' aria-hidden='true'></i>
				</span>
				<span onClick={() => OnLinkOpen('https://medium.com/@NadirBakhsh')} target='_blank'>
					<i className='fa fa-medium' aria-hidden='true'></i>
				</span>
			</div>
		</footer>
	)
}

export default Footer
