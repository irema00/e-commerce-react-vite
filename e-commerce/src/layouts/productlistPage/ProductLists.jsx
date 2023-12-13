import React from "react";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";

export default function ProductLists() {
  const { productListData } = useData();

  return (
    <div className="flex flex-col flex-wrap py-20 px-[10%] font-monserrat gap-12 ">
      <div className="flex justify-between items-center">
        <p>
          Showing all <span>12</span> results
        </p>
        <div className="flex gap-4 items-center ">
          <p>Views</p>
          <Icon
            className="border-2 border-solid border-hdGrey hover:scale-110 cursor-pointer rounded"
            icon="mingcute:grid-fill"
            color="black"
            width="35"
          />
          <Icon
            className="border-2 border-solid border-hdGrey hover:scale-110 cursor-pointer rounded"
            icon="lucide:list"
            color="gray"
            width="35"
          />
        </div>
        <div className="flex justify-between items-center cursor-pointer gap-4">
          <div className="text-darkBg text-md font-normal font-montserrat leading-normal t bg-ltGreye px-6 py-3  shadow-lg rounded border border-solid border-semiGrey flex items-center cursor-pointer">
            <p className="cursor-pointer">Popularity</p>
            <Icon
              className="cursor-pointer "
              icon="mingcute:down-line"
              color="gray"
              width="18"
            />
          </div>
          <button className="text-white text-md font-bold font-montserrat leading-normal t bg-prBlue px-6 py-3 bg-sky-500 rounded hover:scale-110 shadow-lg hover:shadow-xl hover:bg-blue-300  items-center">
            Filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-3">
        {productListData.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap items-center mb-4 shadow-xl  hover:scale-110 cursor-pointer  "
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="object-cover object-center max-w-[240px] max-h-[450px] cursor-pointer  " /* resme sabit genişlik ve yükseklik, değiştirilebilir*/
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
