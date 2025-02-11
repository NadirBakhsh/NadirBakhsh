import SocialMedia from '../ui/SocialMedia'

interface Props {}

function HeroSection(props: Props) {
  const {} = props

  return (
    <div className="w-full relative  h-auto">
      <div className="container mx-auto flex items-center justify-between	 relative ">
        <div />
        <div className="absolute w-full md:w-1/2">
          <h1 className="text-5xl lg:text-6xl flex flex-col space-y-4 tracking-tighter">
            <div>
              Hello I’m{' '}
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
            user-friendly web and Apps. With a strong background in{' '}
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
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
