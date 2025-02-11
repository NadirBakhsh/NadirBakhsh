import React from 'react'

interface Props {}

function TestimonialSection(props: Props) {
  const {} = props

  return (
    <div className="Testimonial h-auto bg-white">
      <div className="container mx-auto my-24 py-1">
        <h2 className="text-5xl text-center text-black ">
          {' '}
          My <span className="font-extrabold text-center">Testimonial</span>
        </h2>

        <div className="grid grid-cols-3 gap-12 mt-20 h-[478px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex p-10 relative border group hover:bg-black items-center flex-col text-base rounded-2xl bg-white  shadow-md transition duration-300">
              <div className="avatar h-20 w-20 border-2 border-black group-hover:border-white rounded-full"></div>
              <p className="text-base text-primary-neutral pt-8 pb-4 text-center italic group-hover:text-white border-b-2 group-hover:border-white border-black">
                I recently had to jump on 10+ different calls across eight
                different countries to find the right owner.
              </p>
              <h5 className="text-lg text-black mt-10 group-hover:text-white font-semibold">
                Flora sheen
              </h5>
              <p className="text-sm absolute bottom-10 text-black group-hover:text-white">
                Designer
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
