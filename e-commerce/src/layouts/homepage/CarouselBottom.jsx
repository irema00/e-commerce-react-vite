import React from "react";
import { useData } from "../../contexts/DataContext";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselBottom() {
  const { carousel2 } = useData();
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
        className="flex h-full w-full"
        style={{
          backgroundImage: `url(${carousel2.firstSlide.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center px-[10%] flex-wrap lg:no-wrap">
          <div className="flex flex-wrap lg:no-wrap">
            <div className=" flex flex-col h-screen justify-center gap-4 items-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-12 text-md font-montserrat  tracking-widest "
              >
                {carousel2.firstSlide.title}
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="font-montserrat font-semibold text-4xl tracking-normal leading-custom  "
              >
                {carousel2.firstSlide.subTitle}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-montserrat tracking-wide font-normal text-xl leading-5 mb-12"
              >
                {carousel2.firstSlide.description}
              </Typography>
              <div className="flex flex-row items-center gap-10 ">
                <div className="text-white text-3xl font-semibold items-center">
                  {carousel2.firstSlide.price}
                </div>
                <Button
                  size="lg"
                  className="bg-successGreen rounded px-16 py-5 textransform scale-105 hover:scale-110"
                >
                  {carousel2.firstSlide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex lg:justify-center lg:w-1/2 lg:items-end ">
          <img
            src={carousel2.firstSlide.imageUrl}
            alt="man wearing white sweatshirt"
            className="  "
          />
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={carousel1.imageUrl2}
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center  ">
          <div className="flex flex-col justify-center items-center text-center w-[600px] ">
            <Typography variant="h1" color="white" className="mb-4 text-7xl">
              {carousel1.title2}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 font-montserrat tracking-wider font-normal text-xl my-6 "
            >
              {carousel1.description2}
            </Typography>
            <div className="flex gap-2">
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