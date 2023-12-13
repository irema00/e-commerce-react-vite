import React from "react";
import { Icon } from "@iconify/react";

export default function PageBanner() {
  return (
    <div className="flex flex-row justify-between flex-wrap w-full font-montserrat py-6 px-10 bg-ltGrey">
      <div className=" flex justify-between flex-row items-center flex-wrap gap-16">
        <div className="text-2xl font-bold  font-montserrat">
          <p>Shop</p>
        </div>
      </div>
      <div className="flex gap-2 text-md tracking-tight font-bold items-center">
        <div className=" text-darkBg">Home</div>
        <Icon icon="uiw:right" color="lightgray" />
        <div className=" text-semiGrey">Shop</div>
      </div>
    </div>
  );
}
