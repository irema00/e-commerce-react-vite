import React from "react";
import ProductCard from "../../components/ProductCard";
import { useData } from "../../contexts/DataContext";
import ProductDetailCarousel from "../productPage/ProductDetailCarousel";
import { Icon } from "@iconify/react";

export default function ProductDetail() {
  const { productData } = useData();
  return (
    <div className="flex flex-col px-[10%] bg-ltGrey ">
      <div className="flex flex-row md:justify-between  justify-center flex-wrap w-full font-montserrat py-6   ">
        <div className="flex gap-2 text-md tracking-tight font-bold   ">
          <div className=" flex text-darkBg ">
            <p>Home</p>
          </div>
          <Icon icon="uiw:right" color="lightgray" />
          <div className=" flex text-semiGrey">
            <p>Shop</p>
          </div>
        </div>
      </div>
      <div className="flex mx-auto my-12 md:p-8 ">
        <div className="flex flex-col lg:flex-row">
          <div className=" lex justify-center items-center">
            <ProductDetailCarousel />
          </div>
          <div className="flex-1 px-4 pt-2">
            <h1 className="text-xl font-normal md:pt-0 pt-10 text-darkBg">
              {productData.productName}
            </h1>
            <div className="my-2 flex gap-3 items-center">
              <span className="flex gap-1 py-2">
                <Icon icon="iconoir:star-solid" color="rgb(243,205,3)" />
                <Icon icon="iconoir:star-solid" color="rgb(243,205,3)" />
                <Icon icon="iconoir:star-solid" color="rgb(243,205,3)" />
                <Icon icon="iconoir:star-solid" color="rgb(243,205,3)" />
                <Icon icon="iconoir:star" color="rgb(243,205,3)" />
              </span>
              <span>{productData.reviewNumber} Reviews</span>
            </div>
            <div className="my-2">
              <span className="text-xl font-extrabold">
                {productData.price}
              </span>
            </div>
            <div className="my-2">
              <span className="text-sm font-bold flex gap-2 leading-6">
                <p className="text-hdGrey">Availability: </p>
                <p className="text-prBlue">{productData.availability}</p>
              </span>
            </div>
            <p
              className="my-4 text-gray-600 border border-solid border-semiGrey border-b-[3px] border-t-0 border-r-0
              border-l-0 pb-6 pt-3"
            >
              {productData.description}
            </p>

            <div className="flex items-center gap-2 pb-8">
              <div className="w-6 h-6 bg-blue-500 rounded-full" />
              <div className="w-6 h-6 bg-teal-300 rounded-full" />
              <div className="w-6 h-6 bg-orange-400 rounded-full" />
              <div className="w-6 h-6 bg-black rounded-full" />
            </div>
            <div className="flex items-center gap-3">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                Select Options
              </button>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <Icon icon="mdi:heart-outline" />
              </div>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <Icon icon="bi:cart" />
              </div>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <Icon icon="mdi:eye" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
