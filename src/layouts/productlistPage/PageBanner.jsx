import React from "react";
import { Icon } from "@iconify/react";

export default function PageBanner() {
  return (
    <div className="flex md:flex-row flex-col justify-between flex-wrap md:no-gap gap-10 w-full font-montserrat py-6  bg-ltGrey px-[11%]">
      <div className=" flex justify-between md:flex-row flex-col items-center flex-wrap gap-16">
        <div className="text-2xl font-bold  font-montserrat">
          <p>Shop</p>
        </div>
      </div>
      <div className="flex gap-2 text-md tracking-tight font-bold items-center justify-center ">
        <div className=" text-darkBg">Home</div>
        <Icon icon="uiw:right" color="lightgray" />
        <div className=" text-semiGrey">Shop</div>
      </div>
    </div>
  );
}
