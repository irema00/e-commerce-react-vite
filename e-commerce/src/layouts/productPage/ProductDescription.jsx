import React from "react";
import { useData } from "../../contexts/DataContext";

export default function ProductDescription() {
  const { productData } = useData();

  return (
    <div className="flex px-[10%]">
      <div className=" bg-detailImgBg rounded-lg flex">
        <img
          className="relative rounded-lg  h-full w-full -left-3 -top-3 "
          src={productData.detailImgUrl}
          alt="Product Image"
        />
      </div>
    </div>
  );
}
