import React from "react";
import { useData } from "../../contexts/DataContext";

export default function ClientTop() {
  const { featuredPostsData } = useData();

  return (
    <div className="font-montserrat px-[15%]  pt-[5%] flex flex-col items-center justify-center cursor-pointer bg-ltGrey">
      <div className="flex flex-col text-center  mb-5">
        <h1 className=" text-darkBg text-3xl  tracking-normal font-bold mb-4">
          Big Companies Are Here
        </h1>
        <p className=" text-hdGrey text-xs font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description1}
        </p>
        <p className=" text-hdGrey text-xs font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description2}
        </p>
      </div>
    </div>
  );
}
