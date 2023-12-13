import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { useData } from "../../contexts/DataContext";

export default function ProductDetailCarousel() {
  const { productData } = useData();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col w-[300px] h-[500px]">
      <Carousel className="w-[300px] h-[267px]">
        {productData.imageUrl.map((img, idx) => (
          <div key={idx} className="flex">
            <img
              src={img}
              alt={`Product ${idx}`}
              className="flex object-cover object-center overflow-hidden"
            />
          </div>
        ))}
      </Carousel>
      <div className="flex items-center justify-start flex-wrap">
        {productData.optionsUrl.map((opt, idx) => (
          <div
            key={idx}
            className={`w-20 h-20 p-2 ${
              activeIndex === idx ? "border-4 border-solid border-blue-500" : ""
            }`}
          >
            <img
              src={opt}
              alt={`Option ${idx}`}
              className="flex object-fill object-center overflow-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
