import React from "react";
import { useData } from "../../contexts/DataContext";

export default function Bestseller() {
  const { bestsellerData } = useData();

  return (
    <div className="flex flex-col flex-wrap py-20 px-[10%] font-monserrat gap-12 ">
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
      <div className="flex flex-wrap justify-evenly gap-3">
        {bestsellerData.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap items-center mb-4 shadow-xl  hover:scale-110 cursor-pointer  "
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="object-cover object-center max-w-[240px] max-h-[450px] " /* resme sabit genişlik ve yükseklik, değiştirilebilir*/
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
