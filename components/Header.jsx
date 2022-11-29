import Logo from './Logo'
import SwitchBtn from './SwitchBtn'

const Header = () => {
	return (
		<header className={`h-24 flex justify-between items-center p-6`}>
			<Logo />
			<SwitchBtn  />
		</header>
	)
}

export default Header
