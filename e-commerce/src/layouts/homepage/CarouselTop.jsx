import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useData } from "../../contexts/DataContext";

export function CarouselTop() {
  const { carousel1 } = useData();
  return (
    <Carousel
      transition={{ duration: 2 }}
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
      <div
        className="flex h-full w-full xl-h-full xl-w-full lg-h-full lg-w-full xl:h-full xl:w-full lg:h-full lg:w-full 2xl:h-full 2xl:w-full bg-cover bg-top"
        style={{
          backgroundImage: `url(${carousel1.imageUrl1})`,
        }}
      >
        <div className="flex px-[10%] w-screen h-screen  ">
          <div className="flex flex-col justify-center   ">
            <Typography
              variant="h5"
              color="white"
              className="mb-12 text-md font-montserrat  tracking-widest  "
            >
              {carousel1.title}
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className=" font-montserrat font-semibold text-6xl tracking-normal leading-custom mb-12 xl:text-6xl lg:text-6xl 2xl:text-6xl xl:mb-12 lg:mb-12 2xl:mb-12 "
            >
              {carousel1.subTitle}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              className=" max-w-[400px] font-montserrat tracking-wide font-normal text-xl leading-5 mb-12 xl:text-xl lg:text-xl 2xl:text-xl"
            >
              {carousel1.description}
            </Typography>
            <div className="flex justify-left xl:justify-left lg:justify-left 2xl:justify-left">
              <Button
                size="lg"
                className="bg-successGreen rounded transform scale-105 hover:scale-110 text-lg xl:text-lg lg:text-lg 2xl:text-lg "
              >
                {carousel1.buttonText1}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center  xl:w-1/2 lg:w-1/2 2xl:w-1/2"></div>
      </div>

      <div className="relative h-full w-full xl:h-full lg:h-full 2xl:h-full">
        <img
          src={carousel1.imageUrl2}
          alt="image 2"
          className="h-screen w-full object-cover xl:h-screen xl:w-full lg:h-screen lg:w-full 2xl:h-screen 2xl:w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center xl:inset-0 lg:inset-0 2xl:inset-0  ">
          <div className="flex flex-col justify-center items-center text-center w-[600px] xl:w-[600px] lg:w-[600px] 2xl:w-[600px]  ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-7xl xl:text-7xl lg:text-7xl 2xl:text-7xl"
            >
              {carousel1.title2}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 font-montserrat tracking-wider font-normal text-xl my-6 xl:text-xl lg:text-xl 2xl:text-xl "
            >
              {carousel1.description2}
            </Typography>
            <div className="flex gap-2 xl:gap-2 lg:gap-2 2xl:gap-2">
              <Button
                size="lg"
                className="bg-prBlue rounded transform scale-105 hover:scale-110  py-4 px-8 text-xl "
              >
                {carousel1.buttonText2}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
