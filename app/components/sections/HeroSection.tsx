import portfolio from "~/json/portfolio.json"
import SocialMedia from "../ui/SocialMedia"
import { Button } from "../ui/AppButton"

interface Props {}

function HeroSection(props: Props) {
  const {} = props
  const {
    HeroSection: { wellcom, name, role, catchy, description }
  } = portfolio

  return (
    <div
      id="home"
      className="relative mt-5 h-[calc(100vh-64px)] w-full px-5 pb-0 md:h-[calc(100vh-84px)]"
    >
      <img
        alt="hero-laptop-image"
        src="./asset/hero-nadir-image.png"
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full -translate-y-5 object-contain object-right border-b"
      />

      <div className="container relative z-20 mx-auto flex h-full items-center">
        <div className="max-w-[640px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 md:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            {catchy}
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
            {wellcom} <span className="font-extrabold">{name}</span>
          </h1>

          <h2 className="mt-2 text-2xl font-bold text-zinc-700 md:text-4xl">{role}</h2>

          <p className="mt-6 max-w-[600px] text-sm leading-7 text-zinc-600 md:text-base">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="sm">View Projects</Button>
            </a>
            <a href="#contact">
              <Button
                size="sm"
                className="border-black bg-white text-black hover:bg-black hover:text-white"
              >
                Get In Touch
              </Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 md:hidden">
            <SocialMedia size="sm" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-12 z-20 hidden flex-col space-y-4 md:flex">
        <SocialMedia />
      </div>
    </div>
  )
}

export default HeroSection
