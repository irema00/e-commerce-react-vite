import React from "react";
import { useData } from "../contexts/DataContext";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselBottom() {
  const { carousel2 } = useData();
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
      <div className="flex ">
        <img
          src={carousel2.firstSlide.backgroundImage}
          alt="Background image"
          className="absolute inset-0 h-screen w-full object-cover"
        />
        <div className="flex px-[13%]">
          <div className="flex-grow border border-solid border-orange-500 p-10 justify-between flex">
            <div className="w-[600px] h-[400px] z-10 border border-solid border-lime-500">
              <Typography
                variant="h5"
                color="white"
                className="mb-12 text-md font-montserrat tracking-widest "
              >
                {carousel2.firstSlide.title}
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className=" font-montserrat font-semibold text-6xl tracking-normal leading-custom mb-12"
              >
                {carousel2.firstSlide.subTitle}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-montserrat tracking-wide font-normal text-xl leading-5 mb-12"
              >
                <p>{carousel2.firstSlide.description}</p>
              </Typography>
              <Button
                size="lg"
                className="bg-successGreen rounded transform scale-105 hover:scale-110"
              >
                <p className="text-lg">{carousel2.firstSlide.buttonText}</p>
              </Button>
              <div className="text-white text-2xl mb-12">
                <p>{carousel2.firstSlide.price}</p>
              </div>
            </div>
          </div>{" "}
          <img
            src={carousel2.firstSlide.imageUrl}
            alt="man wearing white sweatshirt"
            className="w-[300px] h-[400px] absolute border border-solid border-pink-500"
          />
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={carousel2.secondSlide.ImageUrl}
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center  ">
          <div className="flex flex-col justify-center items-center text-center w-[600px] ">
            <Typography variant="h1" color="white" className="mb-4 text-7xl">
              <p>{carousel2.secondSlide.title}</p>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 font-montserrat tracking-wider font-normal text-xl my-6 "
            >
              <p>{carousel2.secondSlide.description}</p>
            </Typography>
            <div className="flex gap-2">
              <Button
                size="lg"
                className="bg-prBlue rounded transform scale-105 hover:scale-110  py-4 px-8 text-xl "
              >
                {carousel2.secondSlide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
