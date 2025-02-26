import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "~/components/ui/carousel"
import { Testimonials } from "~/json/portfolio.json"

export function TestimonialCarousel() {
  const { reviews } = Testimonials

  return (
    <div className="relative h-auto">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: false,
          slidesToScroll: 1
        }}
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
              <div className="flex p-10 relative border group hover:bg-black items-center flex-col text-base rounded-2xl bg-white  shadow-md transition duration-300 h-[400px]">
                <div className="avatar h-20 w-20 border-2 overflow-clip border-black group-hover:border-white rounded-full">
                  <img src={review?.user_image_url} />
                </div>
                <h5 className="text-lg text-black mt-4 group-hover:text-white font-semibold underline underline-offset-4">
                  {review?.username}
                </h5>
                <p className="text-sm text-primary-neutral pt-8 pb-4 font-light text-center  group-hover:text-white ">
                  {review?.comment}
                </p>
                <p className="text-sm absolute bottom-10 text-black group-hover:text-white">
                  From {review?.reviewer_country}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
