import { useState } from 'react'

const SwitchBtn = () => {
	const [isMode, setIsMode] = useState(false)
	function modeChange() {
		const appWrapper = document.querySelector('#app-wrapper')
		if (appWrapper.classList.contains('dark')) {
			appWrapper.classList.remove('dark')
			setIsMode(false)
		} else {
			setIsMode(true)
			appWrapper.classList.add('dark')
		}
	}

	return (
		<div className='switch-btn'>
			<span className='switch-btn-base'></span>
			<button onClick={modeChange}>
				{isMode ? <i className='fa fa-sun-o' aria-hidden='true'></i> : <i className='fa fa-moon-o' aria-hidden='true'></i>}
			</button>
		</div>
	)
}

export default SwitchBtn
