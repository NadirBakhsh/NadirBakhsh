import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Icons } from "~/components/icon";

import Header from "~/components/ui/Header";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" }
	];
};

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
								Hello I’m{" "}
								<span className="text-black font-extrabold">Nadir Bux</span>
							</div>
							<div>
								<span className="text-black  font-extrabold">
									Frontend Developer
								</span>
							</div>
							<div>
								Open to <span className="text-black font-extrabold">Work</span>
							</div>
						</h1>
						<p className="md:max-w-[580px] text-base mt-8 leading-6 text-zinc-500">
							Hi, I’m Nadir Bux, a passionate Fullstack development and
							specializing in Frontend development with responsive design, and
							user-friendly web and Apps. With a strong background in{" "}
							<strong>React, Remix, Next.js, Tailwind CSS</strong> and modern{" "}
							<strong>JavaScript libraries</strong>, please feel free to{" "}
							<i>connect with me and discuss your project.</i>
						</p>
					</div>

					<img
						alt="hero-laptop-image"
						src="./asset/hero-laptop-image.svg"
						className="w-8/12"
					/>

					<div className="absolute bottom-0 flex space-x-8 z-10 translate-y-8 ">
						<Link to={""}>
							<div className="social-media-link">
								<Icons.Facebook />
							</div>
						</Link>
						<Link to={""}>
							<div className="social-media-link">
								<Icons.Instagram />
							</div>
						</Link>
						<Link to={""}>
							<div className="social-media-link">
								<Icons.LinkedIn />
							</div>
						</Link>
						<Link to={""}>
							<div className="social-media-link">
								<Icons.Github />
							</div>
						</Link>
						<Link to={""}>
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
					<h1 className="text-5xl text-center">
						{" "}
						My <span className="font-extrabold">Skills</span>
					</h1>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 my-10">
						{Array.from({ length: 10 }).map((_, i) => (
							<div
								key={i}
								className="h-[186px] text-black hover:text-white hover:bg-black text-xl font-semibold w-[186px] border-2 border-black rounded-md flex items-center justify-center gap-y-8"
							>
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

				<h1 className="text-5xl text-center text-white py-20">
					{" "}
					My <span className="font-extrabold">Experience</span>
				</h1>


					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="text-white border-2 border-zinc-800 rounded-md p-6  hover:bg-zinc-800 mb-8">
							<div className="card-hear flex justify-between">
								<div className="space-x-5 font-semibold">
								<span>G</span>
								<span className="text-xl">
									Lead Software Engineer at Google {i + 1}
								</span>
								</div>
								<span className="text-base">
									Nov {2019 + i} - Present
								</span>
							</div>
							<p className="text-base mt-4 !font-light text-zinc-400">
							As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
							</p>
						</div>
					))}

				</div>

				

			</div>
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
	);
}
