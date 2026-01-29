import { useEffect, useRef } from "react"
import portfolioJson from "~/json/portfolio.json"

function ExperienceCard({
  duration,
  role,
  company,
  describe,
  bullets,
  logoUrl,
  companyUrl,
}: {
  duration: string
  role: string
  company: string
  describe: string
  bullets?: string[]
  logoUrl?: string
  companyUrl?: string
}) {
  const logoSrc = logoUrl?.startsWith("./") ? `/${logoUrl.slice(2)}` : logoUrl
  const companyLink = companyUrl ? (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 font-medium hover:text-black hover:underline transition-colors"
    >
      {company}
    </a>
  ) : (
    <p className="text-gray-600 font-medium">{company}</p>
  )

  return (
    <div className="p-6 border border-gray-200 bg-white hover:border-black transition-colors">
      <div className="flex gap-4 mb-4">
        {logoSrc && (
          <div className="w-14 h-14 flex-shrink-0 bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
            {companyUrl ? (
              <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                <img
                  src={logoSrc}
                  alt={company}
                  className="w-full h-full object-contain p-1"
                />
              </a>
            ) : (
              <img
                src={logoSrc}
                alt={company}
                className="w-full h-full object-contain p-1"
              />
            )}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs text-gray-400 mb-1">{duration}</p>
          <h3 className="font-serif text-xl">{role}</h3>
          {companyLink}
        </div>
      </div>
      {bullets && bullets.length > 0 ? (
        <ul className="text-gray-600 text-sm leading-relaxed list-disc pl-5 space-y-1">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-sm leading-relaxed">{describe}</p>
      )}
    </div>
  )
}

/** Parse start year from duration e.g. "Jan 2024 - Present" -> 2024 */
function getStartYear(duration: string): number {
  const match = duration.match(/\b(19|20)\d{2}\b/)
  return match ? parseInt(match[0], 10) : 0
}

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof portfolioJson.ExperienceSection.experiences)[0]
  index: number
}) {
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
    <div ref={ref} className="relative flex items-stretch gap-4 py-6 pl-2 reveal">
      {/* Left: step node */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-blue-900 bg-white flex items-center justify-center font-mono text-sm font-medium text-blue-900 relative z-10">
        {index + 1}
      </div>
      {/* Right: card full width */}
      <div className="flex-1 min-w-0 w-full">
        <ExperienceCard
          duration={exp.duration}
          role={exp.role}
          company={exp.company}
          describe={exp.describe}
          bullets={exp.bullets}
          logoUrl={exp.logoUrl}
          companyUrl={exp.companyUrl}
        />
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const { ExperienceSection: data } = portfolioJson
  const experiences = [...data.experiences].sort(
    (a, b) => getStartYear(b.duration) - getStartYear(a.duration)
  )

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 lg:px-20 border-b border-gray-200 bg-white scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            My Experience
          </h2>
          <p className="font-mono text-sm text-gray-500">
            Professional Journey · 2019 — Present
          </p>
        </div>

        <div className="relative">
          {/* Vertical line only through timeline items, not the heading */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-blue-900 left-7 -translate-x-1/2"
            aria-hidden
          />
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
