import type { MetaFunction } from "@remix-run/node";
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
						<h1 className="text-6xl flex flex-col space-y-4 tracking-tighter">
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
				</div>
			</div>

			{/* <div className="hero  justify-end container mx-auto bg-white flex   relative">
				<img
					alt="hero-laptop-image"
					src="./asset/hero-laptop-image.svg"
					className=""
				/>
				<div>
					<h1>

					</h1>
				</div>
			</div> */}
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
	);
}
