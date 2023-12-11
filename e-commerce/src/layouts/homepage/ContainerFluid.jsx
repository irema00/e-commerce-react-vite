import React from "react";
import { useData } from "../../contexts/DataContext";
import { Button } from "@material-tailwind/react";

export default function ContainerFluid() {
  const { containerFluid } = useData();

  return (
    <div className="flex flex-wrap justify-evenly lg:flex-nowrap px-[13%] font-montserrat ">
      <img
        src={containerFluid.imageUrl}
        alt="Happy Couple Image"
        className="h-full w-1/2"
      />
      <div className="flex flex-col w-1/2 justify-center gap-7 px-16">
        <h5 className="text-lg tracking-widest font-bold text-gray-400 ">
          {containerFluid.title}
        </h5>
        <h1 className="font-extrabold text-4xl tracking-normal leading-normal text-darkBg ">
          {containerFluid.subTitle}
        </h1>
        <h4 className="font-montserrat tracking-normal font-semibold leading-8  text-gray-500 text-2xl">
          {containerFluid.description}
        </h4>
        <div className="flex space-x-4">
          {containerFluid.buttons.map((button, index) => (
            <Button
              key={index}
              size="lg"
              className={`rounded transform scale-105 hover:scale-110 ${
                index === 0
                  ? "bg-successGreen"
                  : "border border-solid border-successGreen text-successGreen bg-white"
              }`}
              href={button.link}
            >
              <p className="text-lg">{button.label}</p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
