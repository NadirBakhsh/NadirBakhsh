import portfolioJson from "~/json/portfolio.json"
import { Icons } from "../icon"

interface Props {}

function SkillSection(props: Props) {
  const {} = props

  const {
    SkillSection: { title, skills }
  } = portfolioJson

  return (
    <div id="skills" className="skills h-auto bg-white w-full py-10  mt-16 px-5">
      <div className="container mx-auto flex flex-col items-center mt-10">
        <h2 className="text-5xl text-center">
          {" "}
          My <span className="font-extrabold">{title}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-6 md:gap-10 my-12">
          {skills.map((item) => {
            const SkillIcon = Icons[item.icon as keyof typeof Icons]

            return (
              <div
                key={item.name}
                className="h-[160px] p-4 group cursor-pointer flex-col md:h-[186px] text-black hover:text-white hover:bg-black text-xl font-semibold w-[161px] md:w-[186px] border-2 border-black rounded-md flex items-center justify-center "
              >
                <div className="relative flex w-14 h-14  items-center justify-center">
                  <SkillIcon className="w-14 h-14" />
                </div>
                <p className="mt-4">{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillSection

