import React from "react";
import { useData } from "../../contexts/DataContext";

export default function Clients() {
  const { clientsData } = useData();

  return (
    <div className="flex items-center px-[10%] py-[3%] w-full flex-wrap bg-ltGrey ">
      <div className="flex justify-between lg:flex-row flex-col items-center lg:py-0 py-[15%] lg:no-gap gap-12 flex-wrap w-full">
        {clientsData.logos.map((logo, index) => (
          <img
            className="cursor-pointer hover:animate-spin"
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
