import { useEffect, useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
      setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div
                key={index}
                className="flex p-10 relative border group hover:bg-black items-center flex-col text-base rounded-2xl bg-white  shadow-md transition duration-300 h-[400px]"
              >
                <div className="avatar h-20 w-20 border-2 border-black group-hover:border-white rounded-full"></div>
                <h5 className="text-lg text-black mt-4 group-hover:text-white font-semibold">
                  Flora sheen
                </h5>
                <p className="text-base text-primary-neutral pt-8 pb-4 font-light text-center italic group-hover:text-white ">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </>
  );
}
