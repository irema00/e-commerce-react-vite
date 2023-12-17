import React from "react";
import career from "../../assets/contact/career.jpg";

export default function Career() {
  return (
    <div className="flex pl-[10%] w-full h-full justify-between text-white bg-blue-600">
      <div className="flex flex-wrap flex-col justify-center items-start max-w-[450px] bg-blue-600 w-1/2">
        <h5 className="mb-12 text-md font-bold tracking-wider">WORK WITH US</h5>
        <h1 className=" font-montserrat font-semibold text-4xl tracking-t,ght leading-custom mb-12  ">
          Now Let's grow Yours
        </h1>
        <h4 className=" font-montserrat tracking-wide font-normal text-sm leading-5 mb-12 ">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </h4>
        <button className="flex border border-solid border-white px-10 py-3 font-semibold text-sm rounded items-center justify-center">
          Button
        </button>
      </div>

      <div>
        <img src={career} className=" md:visible invisible" />
      </div>
    </div>
  );
}
