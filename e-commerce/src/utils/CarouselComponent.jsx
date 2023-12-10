import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide1 from "../assets/Carousel/slide1.svg";
import slide2 from "../assets/Carousel/slide2.svg";
export function CarouselCustomNavigation() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-2 cursor-pointer  transition-all content-[''] ${
                activeIndex === i ? "w-16 bg-white" : "w-14 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
        <img
          src={slide1}
          alt="image1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-3/4 text-center md:w-2/4">
          <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Summer 2020
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               NEW COLLECTION 
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             We know how large objects will act, but things on a small scale.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" className="bg-successGreen">
               SHOP NOW
              </Button>
                         </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={slide2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
                BLACK FRIDAY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 "
            >
            We know how large objects will act, but things on a small scale.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
         
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

