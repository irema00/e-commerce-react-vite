import React from "react";

export default function Stats() {
  return (
    <div className="flex flex-wrap justify-between px-[10%] py-[5%]">
      <div className="flex flex-col justify-center items-center">
        <span className="text-6xl font-bold">15K</span>
        <p className="text-hdGrey text-md font-semibold ">Happy Customers</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-6xl font-bold">150K</span>
        <p className="text-hdGrey text-md font-semibold ">Monthly Visitors</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-6xl font-bold">15</span>
        <p className="text-hdGrey text-md font-semibold ">
          Countries Worldwide
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-6xl font-bold">100+</span>
        <p className="text-hdGrey text-md font-semibold ">Top Partners</p>
      </div>
    </div>
  );
}
