import { useEffect, useRef } from "react"
import portfolioJson from "~/json/portfolio.json"

const ABOUT_IMAGE =
  "https://www.dropbox.com/scl/fi/dv7jiipvzsscdi6m1tyv1/about-section.png?rlkey=0m69u9awsdntywet1fz0axpll&st=u8oxv56w&dl=1"

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </div>
  )
}

export default function AboutSection() {
  const { AboutSection: data } = portfolioJson
  const whoIAm = data.bio.find((b) => b.title === "Who I Am")
  const whatIDo = data.bio.find((b) => b.title === "What I Do")

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-20 border-b border-gray-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="aspect-square bg-gray-100 mb-8 overflow-hidden relative">
              <img
                src={ABOUT_IMAGE}
                alt="Nadir Bakhsh - Fullstack Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent) {
                    const fallback = document.createElement("span")
                    fallback.className =
                      "font-serif text-8xl text-gray-300 absolute inset-0 flex items-center justify-center"
                    fallback.textContent = "NB"
                    parent.appendChild(fallback)
                  }
                }}
              />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {whoIAm?.describe}
            </p>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-serif text-2xl mb-4">What I Do</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Crafting high quality of web & APPs using JavaScript frameworks
                such as Next.js and React, along with backend solutions powered
                by Node.js and Nest.js. My skills also include working with
                databases like MongoDB, MySQL, PostgreSQL and Firebase. This
                ensures the solutions I develop are both resilient and
                scalable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Additionally, I have a strong proficiency in UI/UX design,
                utilizing frameworks like Tailwind CSS, Material-UI, and Ant
                Design to create interfaces.
              </p>
            </div>
          </div>

          <div>
            <Reveal className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="font-serif text-2xl mb-6">Education</h3>
              <div className="space-y-4">
                {data.education?.map((edu, i) => (
                  <div key={i} className="border-l-2 border-black pl-4">
                    <p className="font-mono text-sm text-gray-400">{edu.years}</p>
                    <p className="font-serif text-lg">{edu.degree}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="font-serif text-2xl mb-6">Certifications</h3>
              <div className="space-y-4">
                {data.certifications?.map((cert, i) => (
                  <div key={i} className="border-l-2 border-black pl-4">
                    <p className="font-serif text-lg">{cert.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{cert.description}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs mt-2 inline-block hover-underline"
                      >
                        View certificate →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="border-t border-gray-200 pt-8">
              <h3 className="font-serif text-2xl mb-6">Future Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                Continue advancing the fields of web and mobile development,
                adopting upcoming technologies, and providing outstanding
                digital solutions that drive business growth and user
                satisfaction.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
