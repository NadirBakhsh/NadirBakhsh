import SocialMedia from "../ui/SocialMedia"

interface Props {}

function HeroSection(props: Props) {
  const {} = props

  return (
    <div id="home" className="w-full relative mt-5 h-[calc(100vh-64px)] md:h-[calc(100vh-84px)] px-5 pb-0">
      {/* <div className="container mx-auto flex flex-col md:flex-row items-center justify-between	 relative ">
        <div />
        <div className="md:absolute w-full md:w-1/2 order-3 mt-12 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-col space-y-2 md:space-y-4 tracking-tighter">
            <div>
              Hello I’m{" "}
              <span className="text-black font-extrabold">Nadir Bux</span>
            </div>
            <div>
              <span className="text-black  font-extrabold">
                Fullstack Developer
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

      </div> */}

      <img
        alt="hero-laptop-image"
        src="./asset/hero-nadir-image.png"
        className="object-contain w-full h-full object-right -translate-y-5 z-10 border-b absolute top-0 left-0 right-0 bottom-0"
      />
        <div className="absolute bottom-20 right-12 z-10 flex flex-col  space-y-4">
          <SocialMedia />
        </div>
    </div>
  )
}

export default HeroSection
