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
      <div className="flex h-screen w-full lg:justify-between lg:bottom-0  justify-center items-center lg:px-[10%] flex-wrap lg:flex-nowrap pt-[10%]  px-[5%] gap-5 bg-[#23856D] py-[10%]">
        <div className=" flex items-center max-w-[500px] text-center lg:text-start ">
          <div className=" flex flex-col gap-2 justify-center items-center">
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
          className="flex self-end max-w-[300px] md:max-w-[300px] lg:max-w-[700px]
         "
        >
          <img
            src={carousel2.firstSlide.imageUrl}
            alt="man wearing white sweatshirt"
            className="object-cover object-center w-auto h-auto"
          />
        </div>
      </div>

      <div className="relative h-screen w-full">
        <img
          src={carousel1.imageUrl2}
          alt="image 2"
          className=" w-full h-screen object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center xl:inset-0 lg:inset-0 2xl:inset-0  ">
          <div className="flex flex-col  justify-center items-center text-center w-[300px] xl:w-[600px] lg:w-[600px] 2xl:w-[600px]  ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 md:text-7xl text-4xl  text-center"
            >
              {carousel1.title2}
            </Typography>
            <Typography
              variant="h5"
              color="white"
              className="mb-12 font-montserrat tracking-wider font-normal md:text-xl my-6 text-md text-center "
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
