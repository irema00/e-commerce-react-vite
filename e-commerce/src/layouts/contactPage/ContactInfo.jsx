import React from "react";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";

export default function ContactInfo() {
  const { featuredPostsData } = useData();

  return (
    <div className="font-montserrat px-[15%]  py-[10%] flex flex-col items-center justify-center cursor-pointer  ">
      <div className="flex flex-col text-center items-center justify-center max-w-[600px] gap-5">
        <h1 className=" text-darkBg text-6xl  tracking-normal font-bold mb-10">
          Get answers to all your questions.
        </h1>
        <p className=" text-hdGrey text-lg font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description1}
        </p>
        <p className=" text-hdGrey text-lg font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description2}
        </p>

        <button className=" px-5 py-3 font-bold rounded tracking-normal mt-10 mb-5  bg-prBlue text-white shadow-xl hover:opacity-75 cursor-pointer">
          CONTACT OUR COMPANY
        </button>

        <div className="flex justify-between gap-4 ">
          <Icon
            icon="mdi:twitter"
            className="text-semiGrey text-4xl  hover:text-hdGrey cursor-pointer"
          />
          <Icon
            icon="uil:facebook"
            className="text-semiGrey text-4xl hover:text-hdGrey cursor-pointer"
          />
          <Icon
            icon="teenyicons:instagram-outline"
            className="text-semiGrey text-4xl hover:text-hdGrey cursor-pointer"
          />
          <Icon
            icon="bi:linkedin"
            className="text-semiGrey text-4xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
