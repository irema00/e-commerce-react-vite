import React from "react";
import { useData } from "../../contexts/DataContext";
import ProductCard from "../../components/ProductCard";

export default function Bestseller() {
  const { bestsellerData } = useData();

  return (
    <div className="flex flex-col flex-wrap py-20 lg:px-[10%] px-0 font-monserrat gap-12 ">
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
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
