import React from "react";
import { useData } from "../../contexts/DataContext";
import ProductCard from "../../components/ProductCard";

export default function ProductDetailBestseller() {
  const { productDetailBestsellerData } = useData();
  return (
    <div className="flex flex-col flex-wrap px-[10%]  py-5 md:items-start items-center lg:px-[13%]">
      <div className="flex pt-10 py-6 items-center font-bold md:text-3xl text-xl tracking-tight">
        {productDetailBestsellerData.title}
      </div>
      <div className="flex flex-wrap  md:justify-between justify-center py-3 pt-6 mb-5 border-t-2 md:gap-0 gap- border-solid  cursor-pointer border-gray-300 ">
        {productDetailBestsellerData.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

//yuvarlaklar çıkarılacak,
