import portfolio from "~/json/portfolio.json"
interface Props {}

function AboutSection(props: Props) {
  const {} = props
  const {
    AboutSection: { title, bio }
  } = portfolio
  return (
    <div className="About h-auto bg-white px-5 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row  my-16 md:my-32 md:space-x-20">
        <div className="">
          <img alt="about-me" src="./asset/frame-1.png" />
        </div>

        <div className="flex-1 mt-10 md:mt-0">
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
                <p className="text-sm mt-[2px] !font-light text-zinc-600 ">
                  {item?.describe}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
