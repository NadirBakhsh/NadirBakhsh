import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "~/components/ui/carousel"
import { cn } from "~/lib/utils"

export function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    if (count > 3) {
      const interval = setInterval(() => {
        api?.scrollNext()
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [api, count])

  return (
    <div className="relative h-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="justify-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div
                key={index}
                className="flex p-10 relative border group hover:bg-black items-center flex-col text-base rounded-2xl bg-white  shadow-md transition duration-300 h-[400px]"
              >
                <div className="avatar h-20 w-20 border-2 border-black group-hover:border-white rounded-full"></div>
                <h5 className="text-lg text-black mt-4 group-hover:text-white font-semibold underline underline-offset-4">
                  Flora sheen
                </h5>
                <p className="text-sm text-primary-neutral pt-8 pb-4 font-light text-center  group-hover:text-white ">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
                </p>
                <p className="text-sm absolute bottom-10 text-black group-hover:text-white">
                  Designer
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {count > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      {count > 1 && (
        <div className="flex justify-center mt-10 gap-1">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-3 w-3 bg-white border border-black rounded-full transition duration-300",
                index === current - 1 ? "bg-black" : "bg-transparent"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
