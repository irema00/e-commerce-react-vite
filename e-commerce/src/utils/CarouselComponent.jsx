import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide1 from "../assets/Carousel/slide1.jpg";
import slide2 from "../assets/Carousel/slide2.jpg";
export function CarouselTop() {
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
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center pl-[10%]">
          <div className="w-3/4 text-left md:w-2/4">
            <Typography
              variant="h5"
              color="white"
              className="mb-12 text-md font-montserrat  tracking-widest "
            >
              <p>SUMMER 2020</p>
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className=" font-montserrat font-semibold text-6xl tracking-normal leading-custom mb-12 "
            >
              <p>NEW COLLECTION</p>
            </Typography>
            <Typography
              variant="h4"
              color="white"
              className=" font-montserrat tracking-wide font-normal text-xl leading-5 mb-12"
            >
              <p>
                We know how large objects will act, but things on a small scale.
              </p>
            </Typography>
            <div className="flex justify-left">
              <Button
                size="lg"
                className="bg-successGreen rounded transform scale-105 hover:scale-110 "
              >
                <p className="text-lg">SHOP NOW</p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide2}
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center justify-center  ">
          <div className="flex flex-col justify-center items-center text-center w-[600px] ">
            <Typography variant="h1" color="white" className="mb-4 text-6xl">
              <p>BLACK FRIDAY</p>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 font-montserrat tracking-wider font-normal text-xl my-5 "
            >
              <p>
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </p>
            </Typography>
            <div className="flex gap-2">
              <Button
                size="lg"
                className="bg-prBlue rounded transform scale-105 hover:scale-110  py-4 px-8 text-xl "
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
