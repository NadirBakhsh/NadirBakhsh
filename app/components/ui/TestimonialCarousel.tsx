import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "~/components/ui/carousel"

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start"
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div
          key={index}
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
