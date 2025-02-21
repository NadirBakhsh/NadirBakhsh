import { TestimonialCarousel } from "../ui/TestimonialCarousel";
import portfolioJson from '~/json/portfolio'

interface Props {}

function TestimonialSection(props: Props) {
  const {} = props;
  const { TestimonialSection } = portfolioJson

  return (
    <div className="Testimonial h-auto bg-white px-5">
      <div className="container mx-auto my-24 py-1">
        <h2 className="text-4xl sm:text-5xl text-center text-black ">
          {" "}
          My <span className="font-extrabold text-center">Testimonial</span>
        </h2>
        <div className="container relative mx-auto h-[400px] mt-10 md:mt-20">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
