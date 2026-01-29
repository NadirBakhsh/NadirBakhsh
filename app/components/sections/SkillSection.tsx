import { useEffect, useRef } from "react"

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Framwork",
    skills: ["Next.js", "Remix", "React Native", "Expo", "Tailwindcss", "Angular"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Nest.js", "REST APIs", "Web Services"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "neoundb", "supbase"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "VS Code", "Figma", "Cursor AI IDE", "Postman", "npm", "AWS"],
  },
  {
    title: "Libraries",
    skills: [
      "React",
      "Redux",
      "Axios",
      "Socket.io",
      "JWT",
      "Lodash",
      "Shadcn",
      "Ant Design",
      "untitled UI",
    ],
  },
  {
    title: "Methodologies",
    skills: ["Agile", "Scrum", "CI/CD", "Code Review"],
  },
]

function SkillCard({
  title,
  skills,
  className,
}: {
  title: string
  skills: string[]
  className?: string
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
    <div ref={ref} className={`reveal ${className ?? ""}`}>
      <div className="p-6 border border-gray-200 hover:border-black transition-colors h-full">
        <h3 className="font-serif text-xl mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs px-3 py-1 border border-gray-200 hover:bg-black hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-20 border-b border-gray-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">My Skills</h2>
          <p className="font-mono text-sm text-gray-500">
            Technologies & Tools · 7+ Years Experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard
              key={cat.title}
              title={cat.title}
              skills={cat.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
