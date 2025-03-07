interface Props {}
import { Link } from "@remix-run/react"
import portfolioJson from "~/json/portfolio.json"

function ProjectsSection(props: Props) {
  const {} = props
  const {
    ProjectsInfo: { title, projects }
  } = portfolioJson

  return (
    <div className="Projects bg-black py-10 px-5 md:px-0">
      <div className="container mx-auto py-5">
        <h2 className="text-5xl text-center text-white ">
          {" "}
          My <span className="font-extrabold text-center">{title}</span>
        </h2>

        {projects.map(({ name, describe, features, image, link }, i) => (
          <div
            key={i}
            className="project card flex mt-10 md:mt-16 gap-10 flex-col md:flex-row odd:md:flex-row-reverse relative border-b-2 pb-8 md:pb-0 border-zinc-400 md:border-0"
          >
            <div className="md:flex-1 border-2 overflow-clip border-zinc-400 bg-red-200 rounded-2xl  shrink-0 grow-0 h-[400px] md:h-auto">
              <img
                src={image}
                alt="name"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-6xl font-bold text-white">{`0${i + 1}`}</h2>
              <h3 className="text-white text-xl md:text-[32px] font-semibold my-4 md:my-5">
                {name}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base md:mt-3">
                {describe}{" "}
                <Link
                  to={link}
                  target="_blank"
                  className="text-zinc-100 underline hover:text-blue-500 cursor-pointer"
                >
                  Link: {link}
                </Link>
              </p>
              <div className="mt-5">
                <h6 className="text-zinc-200 text-lg md:text-xl underline">
                  Features
                </h6>
                {features.map((feature, i) => (
                  <p
                    key={i + feature}
                    className="text-zinc-400 py-[2px] text-sm "
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
