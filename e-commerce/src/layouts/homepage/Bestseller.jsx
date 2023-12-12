import React from "react";
import { useData } from "../../contexts/DataContext";

export default function Bestseller() {
  const { bestsellerData } = useData();

  return (
    <div className="flex flex-col py-20 px-[10%] lg:px-[10%] font-monserrat gap-12">
      <div className="flex text-center flex-col py-8 ">
        <div className="text-center text-hdGrey text-xl font-normal leading-loose tracking-tight">
          {bestsellerData.topTitle}
        </div>
        <h2 className="font-bold text-2xl tracking-normal mb-2">
          {bestsellerData.title}
        </h2>
        <p className="font-normal text-md text-gray-600">
          {bestsellerData.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly lg:flex-wrap ">
        {bestsellerData.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center  w-1/4 lg:w-1/4 md:w1/4 "
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="object-cover object-center w-[239px] h-[427px] " /* resme sabit genişlik ve yükseklik, değiştirilebilir*/
            />
            <div className="flex gap-2 flex-col items-center mt-3 mb-5 ">
              <h3 className="w-32 text-center text-darkBg text-base font-bold  leading-normal tracking-tight  mt-2 ">
                {product.title}
              </h3>
              <p className="text-center text-hdGrey text-sm font-bold leading-normal tracking-tight ">
                {product.department}
              </p>
              <div className="flex justify-evenly w-full">
                <span className=" text-semiGrey text-base font-bold  leading-normal tracking-tight ">
                  {product.price}
                </span>
                <span className="text-teal-700 text-base font-bold  leading-normal tracking-tight ">
                  {product.newPrice}
                </span>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
                <div className="w-4 h-4 bg-teal-700 rounded-full" />
                <div className="w-4 h-4 bg-orange-400 rounded-full" />
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
