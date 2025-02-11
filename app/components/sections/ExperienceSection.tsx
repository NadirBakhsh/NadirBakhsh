import React from 'react'

interface Props {}

function ExperienceSection(props: Props) {
  const {} = props

  return (
    <div className="Experience h-auto bg-black mt-6 pb-20">
      <div className="container mx-auto ">
        <h2 className="text-5xl text-center text-white py-20">
          {' '}
          My <span className="font-extrabold">Experience</span>
        </h2>

        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="text-white border-2 border-zinc-800 rounded-md p-6  hover:bg-zinc-800 mb-8">
            <div className="card-hear flex justify-between">
              <div className="space-x-5 font-semibold">
                <span>G</span>
                <span className="text-xl">
                  Lead Software Engineer at Google {i + 1}
                </span>
              </div>
              <span className="text-base">Nov {2019 + i} - Present</span>
            </div>
            <p className="text-base mt-4 !font-light text-zinc-400">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
