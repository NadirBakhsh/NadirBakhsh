
interface Props {}

function ProjectsSection(props: Props) {
  const {} = props

  return (
    <div className="Projects bg-black py-10 px-5 md:px-0">
      <div className="container mx-auto py-5">
        <h2 className="text-5xl text-center text-white ">
          {" "}
          My <span className="font-extrabold text-center">Projects</span>
        </h2>

        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="project card flex mt-10 md:mt-16 gap-10 flex-col md:flex-row odd:md:flex-row-reverse relative border-b-2 pb-8 md:pb-0 border-zinc-400 md:border-0"
          >
            <div className="md:flex-1 bg-red-200 rounded-2xl shrink-0 grow-0 h-[400px] md:h-auto"></div>
            <div className="flex-1">
              <h2 className="text-6xl font-bold text-white">{`0${i + 1}`}</h2>
              <h3 className="text-white text-xl md:text-[32px] font-semibold my-4 md:my-5">
                Project Name
              </h3>
              <p className="text-zinc-400 text-sm md:text-base md:mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quae pariatur modi, minima ipsum facilis et
                perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos quae pariatur modi, minima ipsum facilis et
                perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos quae pariatur modi, minima ipsum facilis et
                perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos quae pariatur modi, minima ipsum facilis et
                perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos quae pariatur modi, minima ipsum facilis et
                perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos quae pariatur modi, minima ipsum facilis et
                perspiciatis
              </p>
              <div className="mt-5">
                <h5 className="text-zinc-200 text-lg md:text-xl">Tech Stack</h5>
                <div className="flex gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-10 mt-2 w-10 border-zinc-400 hover:bg-primary-neutral  border-2 rounded-md flex items-center justify-center"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
