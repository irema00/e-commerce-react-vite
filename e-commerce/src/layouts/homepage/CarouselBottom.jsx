import React from "react";
import { useData } from "../../contexts/DataContext";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselBottom() {
  const { carousel2, carousel1 } = useData();

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
      <div className="flex h-screen w-screen lg:justify-between justify-center items-center lg:px-[10%] flex-wrap  px-[5%] gap-10 bg-[#23856D] overflow-hidden ">
        <div className=" flex items-center max-w-[500px] text-center lg:text-start ">
          <div className=" flex flex-col gap-2 justify-center items-center lg:items-start text-center lg:text-start pt-20">
            <Typography
              variant="h5"
              color="white"
              className="lg:mb-12 mb-5 text-md font-montserrat  tracking-widest "
            >
              {carousel2.firstSlide.title}
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className=" font-montserrat font-semibold lg:text-6xl text-5xl tracking-wide  lg:leading-[80px] lg:mb-12 mb-5"
            >
              {carousel2.firstSlide.subTitle}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              className=" font-montserrat tracking-wide font-normal text-base leading-7  lg:mb-12 mb-5 lg:justify-start justify-center "
            >
              {carousel2.firstSlide.description}
            </Typography>
            <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center lg:gap-10 gap-7 ">
              <div className="text-white lg:text-3xl text:2xl font-semibold items-center">
                {carousel2.firstSlide.price}
              </div>
              <Button
                size="lg"
                className="bg-successGreen rounded px-12 py-5  lg:text-base text:md font-semibold tracking-wide textransform scale-105 hover:scale-110"
              >
                {carousel2.firstSlide.buttonText}
              </Button>
            </div>
          </div>
        </div>

        <div
          className="flex self-end w-[350px] md:w-[350px] lg:w-[450px] 
         "
        >
          <img
            src={carousel2.firstSlide.imageUrl}
            alt="man wearing white sweatshirt"
            className="object-cover object-center w-auto h-auto"
          />
        </div>
      </div>

      <div
        className="relative h-screen  bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${carousel2.secondSlide.imageUrl})`,
        }}
      >
        <div className="flex px-[15%] lg:px-[10%] w-full h-full">
          <div className="flex flex-col justify-center lg:items-left lg:text-left ">
            <Typography
              variant="h5"
              color="bgDark"
              className="mb-12 md:text-xl sm:text-lg text-sm font-montserrat  tracking-widest lg:text-start text-center "
            >
              {carousel2.secondSlide.title}
            </Typography>
            <Typography
              variant="h1"
              color="bgDark"
              className=" font-montserrat font-semibold text-4xl md:text-5xl lg:items-start lg:text-start text-center tracking-normal leading-custom mb-12  "
            >
              {carousel2.secondSlide.subTitle}
            </Typography>
            <Typography
              variant="h4"
              color="bgDark"
              className=" font-montserrat tracking-wide font-normal text-lg leading-5 mb-12  lg:text-start text-center "
            >
              {carousel2.secondSlide.description}
            </Typography>
            <div className="flex lg:justify-start justify-center">
              <Button
                size="lg"
                className="bg-white text-bgDark rounded transform px-5 py-3 scale-105 hover:scale-110 text-md "
              >
                {carousel2.secondSlide.buttonText}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center  xl:w-1/2 lg:w-1/2 2xl:w-1/2"></div>
      </div>
    </Carousel>
  );
}
