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
          .map(
            (
              { company, type, country, role, duration, describe, logoUrl },
              i
            ) => (
              <div
                key={i}
                className="text-white border-2 border-zinc-500 rounded-lg p-6  hover:bg-zinc-800 mb-8"
              >
                <div className="card-hear flex flex-col md:flex-row justify-between md:items-end">
                  <div className="space-x-4 font-semibold flex  md:items-end">
                    <span className="w-12 h-12 p-1 bg-white shrink-0 grow-0 ">
                      <img src={logoUrl} alt={company} />
                    </span>
                    <span>
                      <span className="text-xl">{company}</span>
                      <p className="!font-light text-sm text-zinc-300">
                        {role}
                      </p>
                    </span>
                  </div>
                  <span className="text-base mt-[30px] md:mt-0">
                    {duration}
                  </span>
                </div>
                <p className="text-base mt-4 !font-light text-zinc-400">
                  {describe}
                </p>
              </div>
            )
          )}
      </div>
    </div>
  )
}

export default ExperienceSection
