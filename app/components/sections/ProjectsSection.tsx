import { useState, useEffect, useRef } from "react"
import portfolioJson from "~/json/portfolio.json"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"

type Filter = "all" | "ai" | "dashboard" | "mobile" | "ecommerce"

interface ProjectData {
  id: number
  name: string
  describe: string
  features: string[]
  image: string
  link: string
  filter: Filter
  year: string
  category: string
  tools?: string
  problem?: string
  solution?: string
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI Platform" },
  { key: "dashboard", label: "Dashboard" },
  { key: "mobile", label: "Mobile" },
  { key: "ecommerce", label: "E-Commerce" },
]

function useReveal() {
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
  return ref
}

export default function ProjectsSection() {
  const { ProjectsInfo } = portfolioJson
  const [filter, setFilter] = useState<Filter>("all")
  const [modalProjectId, setModalProjectId] = useState<number | null>(null)

  const projects: ProjectData[] = ProjectsInfo.projects.map((p, i) => ({
    id: i,
    name: p.name,
    describe: p.describe,
    features: p.features,
    image: p.image,
    link: p.link,
    filter: (i === 0 ? "ai" : "ai") as Filter,
    year: i === 0 ? "2023-2024" : "2022-2023",
    category: i === 0 ? "AI Platform" : "AI Service",
    tools: i === 0 ? "React.js, React Native, Node.js, MongoDB, REST APIs" : "Next.js, TypeScript, Strapi, PostgreSQL, Tailwind CSS",
    problem: "",
    solution: p.describe,
  }))

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.filter === filter)

  const currentProject =
    modalProjectId != null ? projects.find((p) => p.id === modalProjectId) : null
  const currentIndex = currentProject ? projects.indexOf(currentProject) : 0
  const prevId = currentIndex > 0 ? projects[currentIndex - 1].id : projects[projects.length - 1]?.id
  const nextId =
    currentIndex < projects.length - 1 && currentIndex >= 0
      ? projects[currentIndex + 1].id
      : projects[0]?.id ?? 0

  return (
    <>
      <section
        id="projects"
        className="py-20 px-6 md:px-12 lg:px-20 border-b border-gray-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">My Projects</h2>
            <p className="font-mono text-sm text-gray-500">
              Selected work · 2019 — 2024
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-12 font-mono text-sm">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`filter-btn transition-all duration-300 ${
                  filter === f.key ? "active" : ""
                }`}
                data-filter={f.key}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setModalProjectId(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {modalProjectId != null && currentProject && (
        <ProjectModal
          project={currentProject}
          onClose={() => setModalProjectId(null)}
          onPrev={() => setModalProjectId(prevId)}
          onNext={() => setModalProjectId(nextId)}
        />
      )}
    </>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectData
  onOpen: () => void
}) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      className="project-card group cursor-pointer reveal"
    >
      <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
        <div className="project-image absolute inset-0 flex items-center justify-center transition-all duration-500">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="project-overlay absolute inset-0 bg-black text-white flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300">
          <p className="font-mono text-xs mb-2">{project.category}</p>
          <h3 className="font-serif text-2xl">{project.name}</h3>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="font-serif text-lg">{project.name}</p>
        <p className="font-mono text-xs text-gray-400">{project.year}</p>
      </div>
    </div>
  )
}

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: ProjectData
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="min-h-screen">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center z-10">
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-sm hover-underline flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </button>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onPrev}
              className="p-2 border border-gray-200 hover:border-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="p-2 border border-gray-200 hover:border-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <div className="mb-8 animate-fade-in-up">
            <p className="font-mono text-sm text-gray-400 mb-2">
              {project.category} · {project.year}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl mb-4">
              {project.name}
            </h1>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm hover-underline inline-block mt-2"
              >
                Visit Website →
              </a>
            ) : null}
          </div>

          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-gray-600">{project.describe}</p>
          </div>

          {project.tools && (
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="font-mono text-sm text-gray-400 mb-4">
                Tools & Technologies
              </p>
              <p className="font-mono text-sm">{project.tools}</p>
            </div>
          )}

          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="font-mono text-sm text-gray-400 mb-4">Key Features</p>
            <ul className="font-mono text-sm space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>{f.replace(/^[^\w\s]+/, "").trim()}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
