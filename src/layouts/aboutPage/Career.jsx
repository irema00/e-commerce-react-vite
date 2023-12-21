import React from "react";
import career from "../../assets/contact/career.jpg";

export default function Career() {
  return (
    <div className="flex  w-full h-full justify-between text-white bg-blue-600">
      <div className="flex flex-wrap flex-col justify-center lg:items-start text-center lg:text-left  items-center  md:px-[10%]  px-[15%] bg-blue-600 lg:w-1/2 w-full py-[15%] lg:py-0 ">
        <h5 className="mb-12 text-md font-bold tracking-wider">WORK WITH US</h5>
        <h1 className=" font-montserrat font-semibold text-4xl tracking-tight leading-custom mb-12  ">
          Now Let's grow Yours
        </h1>
        <h4 className=" font-montserrat tracking-wide font-normal text-sm leading-5 mb-12 ">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </h4>
        <button className="flex border border-solid border-white px-7 py-3 font-semibold text-sm rounded items-center  justify-center">
          Button
        </button>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={career}
          className=" lg:flex hidden self-center  w-full h-auto"
        />
      </div>
    </div>
  );
}
