import portfolio from "~/json/portfolio.json"

interface Props {}

function AboutSection(props: Props) {
  const {} = props
  const {
    AboutSection: { title, bio }
  } = portfolio

  const whoIAm = bio.find((item) => item.title?.toLowerCase() === "who i am")
  const whatIDo = bio.find((item) => item.title?.toLowerCase() === "what i do")
  const educationBlock = bio.find((item) => "education" in item)
  const certificationBlock = bio.find((item) => "certifications" in item)

  return (
    <section
      id="about"
      className="About relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white py-16 md:py-24"
    >
      <div className="container mx-auto space-y-10 px-5">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="group relative">
          <div className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-2xl bg-zinc-200/60 lg:block" />
          <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl border border-zinc-300 lg:block" />

          <div className="relative overflow-hidden rounded-3xl border border-zinc-300 bg-white  shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              alt="Nadir Bakhsh"
              src="/asset/nadir-about-image.png"
              className="h-auto max-h-[560px] w-full rounded-2xl object-cover grayscale transition duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
            {title} <span className="font-extrabold">Me</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500 md:text-base">
            A quick snapshot of my background, work style, and learning journey.
          </p>

          <div className="mt-8 space-y-6 md:space-y-8">
            {[whoIAm, whatIDo].map((item, index) =>
              item ? (
                <article
                  key={index}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{item.describe}</p>
                </article>
              ) : null
            )}
          </div>
        </div>
      </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-900">
              {educationBlock?.title ?? "Education"}
            </h3>
            <ul className="">
              {(educationBlock && "education" in educationBlock
                ? educationBlock.education
                : []
              )?.map((edu, eduIndex) => (
                <li key={eduIndex} className="border-l-2 border-zinc-200 pl-4">
                  <span className="text-xs uppercase tracking-wide text-zinc-500">
                    {edu.duration}
                  </span>
                  <p className="mt-0.5 text-sm font-semibold text-zinc-800">{edu.degree}</p>
                  <p className="text-sm text-zinc-600">{edu.institution}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-900">
              {certificationBlock?.title ?? "Certifications"}
            </h3>
            <ul className="mt-3 space-y-4">
              {(certificationBlock && "certifications" in certificationBlock
                ? certificationBlock.certifications
                : []
              )?.map((cert, certIndex) => (
                <li key={certIndex} className="border-l-2 border-zinc-200 pl-4">
                  <p className="text-sm font-semibold text-zinc-800">
                    {cert.name}{" "}
                    <span className="font-normal text-zinc-500">({cert.duration})</span>
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-600">{cert.describe}</p>
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-zinc-700 underline underline-offset-2 hover:text-black"
                    >
                      View certificate -&gt;
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
