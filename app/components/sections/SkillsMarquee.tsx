const MARQUEE_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Remix",
  "Tailwind CSS",
  "Redux",
  "Storybook",
  "Node.js",
  "Express",
  "Nest.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Git",
  "Docker",
  "React Native",
  "Material-UI",
  "Ant Design",
  "Shadcn UI",
]

export default function SkillsMarquee() {
  return (
    <section className="py-8 border-b border-gray-200 bg-white overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex gap-12">
          <div className="flex items-center gap-12 shrink-0">
            {MARQUEE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm whitespace-nowrap text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-12 shrink-0">
            {MARQUEE_SKILLS.map((skill) => (
              <span
                key={`dup-${skill}`}
                className="font-mono text-sm whitespace-nowrap text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
