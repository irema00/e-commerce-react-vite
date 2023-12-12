import React from "react";
import { useData } from "../../contexts/DataContext";
import { Button } from "@material-tailwind/react";

export default function ContainerFluid() {
  const { containerFluid } = useData();

  return (
    <div className="flex sm:items-center md:justify-center flex-wrap md:no-wrap  lg:no-wrap lg:justify-evenly flex-row h-full w-full px-[10%] lg:px-[10%]  font-montserrat border-2 border-solid border-red-100 ">
      <img
        src={containerFluid.imageUrl}
        alt="Happy Couple Image"
        className=" object-cover  max-w-[550px] "
      />

      <div className="flex flex-col justify-center gap-6 max-w-[450px]  border-2 border-solid border-blue-100 ">
        <h5 className="text-lg  tracking-widest font-bold text-gray-400 ">
          {containerFluid.title}
        </h5>
        <h1 className="font-bold text-4xl tracking-wide leading-normal text-darkBg ">
          {containerFluid.subTitle}
        </h1>
        <h4 className="tracking-normal font-semibold leading-8  text-hdGrey text-2xl">
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
