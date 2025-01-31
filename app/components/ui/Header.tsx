import { DownloadIcon } from 'lucide-react'
import { Button } from './button'

interface Props {}

function Header(props: Props) {
	const {} = props

	return (
		<header className="w-full flex items-center h-[104px] sticky top-0 z-50 bg-white">
			<nav className="w-full flex items-center justify-between @container container mx-auto">
				<div>Logo</div>
				<ul className="flex items-center space-x-8">
					<li>About Me</li>
					<li>Skills</li>
					<li>Project</li>
					<li>Contact me</li>
				</ul>
				<div>
					<Button size="md">
						<span>Resume</span>
						<DownloadIcon />
					</Button>
				</div>
			</nav>
		</header>
	)
}

export default Header
