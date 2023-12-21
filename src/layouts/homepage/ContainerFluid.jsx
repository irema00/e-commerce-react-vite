import React from "react";
import { useData } from "../../contexts/DataContext";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function ContainerFluid() {
  const { containerFluid } = useData();

  return (
    <div className="flex lg:justify-between justify-center items-center text-center lg:text-start flex-wrap-reverse gap-8 md:gap-0 lg:flex-nowrap md:px-[10%]  ">
      <div className="md:w-[600px] items-center self-center justify-center  ">
        <img
          src={containerFluid.imageUrl}
          alt="Happy Couple Image"
          className=" object-cover object-center w-full h-full "
        />
      </div>
      <div className="flex flex-col justify-center gap-6 md:w-[450px] w-[300px] py-[10%]  ">
        <h5 className="sm:text-lg text-md tracking-widest font-bold text-gray-400 ">
          {containerFluid.title}
        </h5>
        <h1 className="font-bold md:text-4xl text-5xl leading-normal text-darkBg ">
          {containerFluid.subTitle}
        </h1>
        <h4 className="tracking-normal font-semibold leading-8  text-hdGrey text-2xl">
          {containerFluid.description}
        </h4>
        <div className="flex gap-5 mt-5  md:flex-row flex-col items-center lg:items-start lg:justify-start justify-center">
          {containerFluid.buttons.map((button, index) => (
            <Link to="/shop">
              <Button
                key={index}
                size="lg"
                className={`rounded transform scale-105 hover:scale-110  ${
                  index === 0
                    ? "lg:bg-successGreen bg-prBlue"
                    : "border border-solid lg:border-successGreen border-prBlue lg:text-successGreen  text-prBlue bg-white "
                }`}
                href={button.link}
              >
                <p className="text-lg">{button.label}</p>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
