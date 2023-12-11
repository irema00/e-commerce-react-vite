import React from "react";
import { useData } from "../contexts/DataContext";

export default function Bestseller() {
  const { bestsellerData } = useData();

  return (
    <div className="flex flex-col py-8 px-[13%]">
      <div className="flex text-center flex-col py-8 ">
        <h2 className="font-bold text-2xl tracking-normal mb-2">
          {bestsellerData.title}
        </h2>
        <p className="font-normal text-md text-gray-600">
          {bestsellerData.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {bestsellerData.products.map((product) => (
          <div
            key={product.title}
            className="flex flex-col items-center p-4 m-2 border border-gray-200"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="object-cover"
            />
            <h3 className="mt-2 text-sm">{product.title}</h3>
            <p className="text-xs">{product.department}</p>
            <span className="text-lg font-bold">{product.price}</span>{" "}
            <span className="text-lg font-bold">{product.newPrice}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
