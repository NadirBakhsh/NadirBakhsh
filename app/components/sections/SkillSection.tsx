import React from 'react'

interface Props {}

function SkillSection(props: Props) {
  const {} = props

  return (
    <div className="skills h-auto bg-white w-full py-10  mt-16">
      <div className="container mx-auto flex flex-col items-center mt-10">
        <h2 className="text-5xl text-center">
          {' '}
          My <span className="font-extrabold">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 my-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-[160px] md:h-[186px] text-black hover:text-white hover:bg-black text-xl font-semibold w-[161px] md:w-[186px] border-2 border-black rounded-md flex items-center justify-center gap-y-8">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillSection
