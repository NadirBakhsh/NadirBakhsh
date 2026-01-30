import portfolio from "~/json/portfolio.json"
interface Props {}

function AboutSection(props: Props) {
  const {} = props
  const {
    AboutSection: { title, bio }
  } = portfolio
  return (
    <div id="about" className="About h-auto bg-white  mt-20">
      <div className="container  mx-auto flex flex-col md:flex-row  justify-center items-center  ">
        <div className="flex-1">
          <img 
          alt="nadir-about" src="/asset/nadir-about-image.png" 
          className=" h-auto max-h-[520px] md:max-h-[580px]"
          />
        </div>

        <div className="flex-1  ">
          <h2 className="text-5xl text-left text-black ">
            {" "}
            {title} <span className="font-extrabold">Me</span>
          </h2>

          {bio.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="text-lg mt-6 md:mt-3 font-semibold text-left text-zinc-600 ">
                  {item?.title}
                </h2>
                {"education" in item && item.education ? (
                  <ul className="mt-2 space-y-4">
                    {(item.education as { duration: string; degree: string; institution: string }[]).map((edu, eduIndex) => (
                      <li key={eduIndex} className="text-left">
                        <span className="text-sm text-zinc-500">{edu.duration}</span>
                        <p className="text-sm mt-0.5 font-semibold text-zinc-700">{edu.degree}</p>
                        <p className="text-sm !font-light text-zinc-600">{edu.institution}</p>
                      </li>
                    ))}
                  </ul>
                ) : "certifications" in item && item.certifications ? (
                  <ul className="mt-2 space-y-4">
                    {(item.certifications as { name: string; duration: string; describe: string; certificateUrl?: string }[]).map((cert, certIndex) => (
                      <li key={certIndex} className="text-left">
                        <p className="text-sm font-semibold text-zinc-700">{cert.name} <span className="text-zinc-500 font-normal">({cert.duration})</span></p>
                        <p className="text-sm mt-0.5 !font-light text-zinc-600">{cert.describe}</p>
                        {cert.certificateUrl ? (
                          <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-sm mt-1 inline-block text-zinc-600 hover:text-zinc-800 underline underline-offset-2">
                            View certificate →
                          </a>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm mt-[2px] !font-light text-zinc-600 ">
                    {item?.describe}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
