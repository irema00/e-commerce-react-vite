import React from "react";
import { useData } from "../../contexts/DataContext";

export default function Clients() {
  const { clientsData } = useData();

  return (
    <div className="flex items-center px-[10%] py-[5%] w-full bg-ltGrey ">
      <div className="flex justify-between items-center w-full">
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
