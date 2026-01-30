import portfolioJson from "~/json/portfolio.json"

interface Props {}

function ExperienceSection(props: Props) {
  const {} = props

  const {
    ExperienceSection: { title, experiences }
  } = portfolioJson

  return (
    <div className="Experience h-auto bg-black mt-6 pb-20 px-5 md:px-0">
      <div className="container mx-auto ">
        <h2 className="text-5xl text-center text-white py-20">
          {" "}
          My <span className="font-extrabold">{title}</span>
        </h2>

        {experiences
          .reverse()
          .map((experience, i) => {
            const { company, country, role, duration, responsibilities, logoUrl } = experience
            const describe = "describe" in experience ? (experience as { describe?: string }).describe : undefined
            return (
              <div
                key={i}
                className="text-white border-2 border-zinc-500 rounded-lg p-6  hover:bg-zinc-800 mb-8"
              >
                <div className="card-header flex flex-col">
         
                  <div className="space-x-4 font-semibold flex items-end">
                    <span className="w-12 h-12 p-1 bg-white shrink-0 grow-0 rounded overflow-hidden">
                      <img src={logoUrl} alt={company} className="w-full h-full object-contain" />
                    </span>
                    <span>
                      <div>

                      <span className="text-xl">
                        {company}
                        {country ? ` - ${country}` : ""}
                      </span>
                      <span className="text-base text-zinc-400 ml-2 font-medium">
                    ({duration})
                  </span>
                      </div>
                      <p className="!font-light text-sm text-zinc-300">
                        {role}
                      </p>
                    </span>
                  </div>
                </div>
                {responsibilities && responsibilities.length > 0 ? (
                  <ul className="text-sm mt-4 !font-light text-zinc-400 list-disc list-inside space-y-1">
                    {responsibilities.map((item: string, j: number) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  describe && (
                    <p className="text-base mt-4 !font-light text-zinc-400">
                      {describe}
                    </p>
                  )
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ExperienceSection
