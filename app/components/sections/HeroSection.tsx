import portfolioJson from "~/json/portfolio.json"

const HERO_IMAGE =
  "https://www.dropbox.com/scl/fi/gg209n47ii6ehbb00esi7/hero.png?rlkey=ikk1d3pkkfxjgk74vxryrvgby&st=1ti4j5k2&dl=1"

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function HeroSection() {
  const { HeroSection: hero } = portfolioJson

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 border-b border-gray-200 relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Nadir Bakhsh - Fullstack Developer"
          className="w-full h-full object-cover grayscale"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = "none"
            const parent = target.parentElement
            if (parent) {
              const fallback = document.createElement("div")
              fallback.className = "w-full h-full bg-gradient-to-br from-gray-100 to-gray-300"
              parent.appendChild(fallback)
            }
          }}
        />
      </div>

      <div className="max-w-5xl relative z-10">
        <p
          className="font-mono text-sm md:text-base mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="status-badge inline-block w-2 h-2 bg-black rounded-full mr-2" />
          {hero.catchy}
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {hero.wellcom}
          <br />
          {hero.name}
        </h1>
        <p
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-gray-400 mt-2 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {hero.role}
        </p>
        <p
          className="font-mono text-sm md:text-base mt-8 max-w-xl text-gray-500 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {hero.description}
        </p>
        <div
          className="mt-12 flex flex-wrap gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="font-mono text-sm px-8 py-4 border border-black hover-invert"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="font-mono text-sm px-8 py-4 border border-gray-300 hover-invert-white"
          >
            Get In Touch
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="font-mono text-sm px-8 py-4 border border-gray-300 hover-invert-white"
          >
            About Me
          </button>
        </div>
      </div>
    </section>
  )
}
