import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Icons } from '~/components/icon'

import Header from '~/components/ui/Header'

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
			<Header />

			{/* Header end */}

			{/* Hero Section start */}
			<div className="w-full relative  h-auto">
				<div className="container mx-auto flex items-center justify-between	 relative ">
					<div />
					<div className="absolute w-full md:w-1/2">
						<h1 className="text-5xl lg:text-6xl flex flex-col space-y-4 tracking-tighter">
							<div>
								Hello I’m <span className="text-black font-extrabold">Nadir Bux</span>
							</div>
							<div>
								<span className="text-black  font-extrabold">Frontend Developer</span>
							</div>
							<div>
								Open to <span className="text-black font-extrabold">Work</span>
							</div>
						</h1>
						<p className="md:max-w-[580px] text-base mt-8 leading-6 text-zinc-500">
							Hi, I’m Nadir Bux, a passionate Fullstack development and specializing in
							Frontend development with responsive design, and user-friendly web and
							Apps. With a strong background in{' '}
							<strong>React, Remix, Next.js, Tailwind CSS</strong> and modern{' '}
							<strong>JavaScript libraries</strong>, please feel free to{' '}
							<i>connect with me and discuss your project.</i>
						</p>
					</div>

					<img
						alt="hero-laptop-image"
						src="./asset/hero-laptop-image.svg"
						className="w-8/12"
					/>

					<div className="absolute bottom-0 flex space-x-8 z-10 translate-y-8 ">
						<Link to={''}>
							<div className="social-media-link">
								<Icons.Facebook />
							</div>
						</Link>
						<Link to={''}>
							<div className="social-media-link">
								<Icons.Instagram />
							</div>
						</Link>
						<Link to={''}>
							<div className="social-media-link">
								<Icons.LinkedIn />
							</div>
						</Link>
						<Link to={''}>
							<div className="social-media-link">
								<Icons.Github />
							</div>
						</Link>
						<Link to={''}>
							<div className="social-media-link">
								<Icons.RedRabbit />
							</div>
						</Link>
					</div>
				</div>
			</div>

			{/* Hero Section end */}

			{/* Skills Section start */}
			<div className="skills h-auto bg-white w-full py-10  mt-16">
				<div className="container mx-auto flex flex-col items-center mt-10">
					<h2 className="text-5xl text-center">
						{' '}
						My <span className="font-extrabold">Skills</span>
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 my-10">
						{Array.from({ length: 10 }).map((_, i) => (
							<div
								key={i}
								className="h-[186px] text-black hover:text-white hover:bg-black text-xl font-semibold w-[186px] border-2 border-black rounded-md flex items-center justify-center gap-y-8">
								{i}
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Skills Section end */}

			{/* Experience Section start */}
			<div className="Experience h-auto bg-black mt-6 pb-20">
				<div className="container mx-auto ">
					<h2 className="text-5xl text-center text-white py-20">
						{' '}
						My <span className="font-extrabold">Experience</span>
					</h2>

					{Array.from({ length: 3 }).map((_, i) => (
						<div
							key={i}
							className="text-white border-2 border-zinc-800 rounded-md p-6  hover:bg-zinc-800 mb-8">
							<div className="card-hear flex justify-between">
								<div className="space-x-5 font-semibold">
									<span>G</span>
									<span className="text-xl">
										Lead Software Engineer at Google {i + 1}
									</span>
								</div>
								<span className="text-base">Nov {2019 + i} - Present</span>
							</div>
							<p className="text-base mt-4 !font-light text-zinc-400">
								As a Senior Software Engineer at Google, I played a pivotal role in
								developing innovative solutions for Google's core search algorithms.
								Collaborating with a dynamic team of engineers, I contributed to the
								enhancement of search accuracy and efficiency, optimizing user
								experiences for millions of users worldwide.
							</p>
						</div>
					))}
				</div>
			</div>
			{/* Experience Section end */}

			{/* About Section start */}
			<div className="About h-auto bg-white ">
				<div className="container mx-auto flex my-32">
					<div className="flex-1">
						<img alt="about-me" src="./asset/about-me.svg" />
					</div>

					<div className="flex-1">
						<h2 className="text-5xl text-left text-black ">
							{' '}
							About <span className="font-extrabold">Me</span>
						</h2>
						<p className="text-base mt-4 !font-light text-zinc-500 ">
							I'm a passionate, self-proclaimed designer who specializes in full stack
							development (React.js & Node.js). I am very enthusiastic about bringing
							the technical and visual aspects of digital products to life. User
							experience, pixel perfect design, and writing clear, readable, highly
							performant code matters to me.
							<br />
							<br />
							I began my journey as a web developer in 2015, and since then, I've
							continued to grow and evolve as a developer, taking on new challenges and
							learning the latest technologies along the way. Now, in my early
							thirties, 7 years after starting my web development journey, I'm building
							cutting-edge web applications using modern technologies such as Next.js,
							TypeScript, Nestjs, Tailwindcss, Supabase and much more.
							<br />
							<br />
							When I'm not in full-on developer mode, you can find me hovering around
							on twitter or on indie hacker, witnessing the journey of early startups
							or enjoying some free time. You can follow me on Twitter where I share
							tech-related bites and build in public, or you can follow me on GitHub.
						</p>
					</div>
				</div>
			</div>
			{/* About Section end */}

			{/* Projects Section start */}
			<div className="Projects bg-black py-10 ">
				<div className="container mx-auto py-5">
					<h2 className="text-5xl text-center text-white ">
						{' '}
						My <span className="font-extrabold text-center">Projects</span>
					</h2>

					{Array.from({ length: 3 }).map((_, i) => (
						<div
							key={i}
							className="project card flex mt-16 h-[516px] gap-10 odd:flex-row-reverse relative">
							<div className="flex-1 bg-red-200 rounded-xl"></div>
							<div className="flex-1">
								<h2 className="text-6xl font-bold text-white">{`0${i + 1}`}</h2>
								<h3 className="text-white text-3xl font-semibold my-5">Project Name</h3>
								<p className="text-zinc-400 text-base mt-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
									quae pariatur modi, minima ipsum facilis et perspiciatis Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Dignissimos quae pariatur
									modi, minima ipsum facilis et perspiciatis Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Dignissimos quae pariatur modi, minima
									ipsum facilis et perspiciatis Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Dignissimos quae pariatur modi, minima ipsum facilis
									et perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Dignissimos quae pariatur modi, minima ipsum facilis et
									perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos quae pariatur modi, minima ipsum facilis et perspiciatis
								</p>
								<div className=" mt-5">
									<h5 className="text-zinc-200 text-xl">Tech Stack</h5>
									<div className="flex gap-3">
										{Array.from({ length: 4 }).map((_, i) => (
											<div
												key={i}
												className="h-10 mt-2 w-10 border-zinc-400 hover:bg-primary-neutral  border-2 rounded-md flex items-center justify-center"></div>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Projects Section end */}

			{/* Testimonial Section start */}
			<div className="Testimonial h-auto bg-white">
				<div className="container mx-auto my-24 py-1">
					<h2 className="text-5xl text-center text-black ">
						{' '}
						My <span className="font-extrabold text-center">Testimonial</span>
					</h2>

					<div className="grid grid-cols-3 gap-12 mt-20 h-[478px]">
						{Array.from({ length: 3 }).map((_, i) => (
							<div
								key={i}
								className="flex p-10 group hover:bg-black items-center flex-col text-base rounded-lg bg-white  shadow-md transition duration-300">
								<div className="avatar h-20 w-20 border-2 border-black group-hover:border-white rounded-full"></div>
							</div>
						))}
					</div>
				</div>
			</div>
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
