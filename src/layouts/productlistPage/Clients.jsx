import React from "react";
import { useData } from "../../contexts/DataContext";

export default function Clients() {
  const { clientsData } = useData();

  return (
    <div className="flex items-center px-[10%] py-[3%] w-full flex-wrap bg-ltGrey ">
      <div className="flex justify-between  items-center lg:py-0 py-[15%] lg:gap-8 gap-12 flex-wrap w-full sm:flex-row sm:px-[10%] sm:gap-20 lg:px-0 flex-col">
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
