import portfolioJson from "~/json/portfolio.json"
import { TestimonialCarousel } from "../ui/TestimonialCarousel"

interface Props {}

function TestimonialSection(props: Props) {
  const {} = props
  const {
    Testimonials: { title }
  } = portfolioJson

  return (
    <div className="Testimonial h-auto bg-white px-5">
      <div className="container mx-auto my-24 py-1">
        <h2 className="text-4xl sm:text-5xl text-center text-black ">
          {" "}
          My <span className="font-extrabold text-center">{title}</span>
        </h2>
        <div className="container relative mx-auto  mt-10 md:mt-20">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
