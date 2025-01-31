import type { MetaFunction } from '@remix-run/node'
import { Button } from '~/components/ui/button'

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Index() {
	return (
		<div className="relative">
			{/* Header start */}
			<header className="w-full flex items-center h-[80px] sticky top-0 z-50 bg-white">
				<nav className="w-full flex items-center justify-between @container container mx-auto">
					<div>Logo</div>
					<ul className="flex items-center space-x-8">
						<li>About Me</li>
						<li>Skills</li>
						<li>Project</li>
						<li>Contact me</li>
					</ul>
					<div>
						<Button>Resume</Button>
					</div>
				</nav>
			</header>

			{/* Header end */}

			{/* Hero Section start */}
			<div className="hero h-screen bg-white"></div>
			{/* Hero Section end */}

			{/* Skills Section start */}
			<div className="skills h-screen bg-white">Skills section</div>
			{/* Skills Section end */}

			{/* Experience Section start */}
			<div className="Experience h-screen bg-black">Experience section</div>
			{/* Experience Section end */}

			{/* About Section start */}
			<div className="About h-screen bg-white">About section</div>
			{/* About Section end */}

			{/* Projects Section start */}
			<div className="Projects h-screen bg-black">Projects section</div>
			{/* Projects Section end */}

			{/* Testimonial Section start */}
			<div className="Testimonial h-screen bg-white">Testimonial section</div>
			{/* Testimonial Section end */}

			{/* Contact Section start */}
			<div className="Contact h-screen bg-white">Contact section</div>
			{/* Contact Section end */}

			{/*footer Section start */}
			<div className="footer h-[100px] w-full bg-black">footer section</div>
			{/* footer Section end */}
		</div>
	)
}
