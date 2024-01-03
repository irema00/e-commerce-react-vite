import React from "react";
import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux";

export default function ProductDetailCarousel() {
  const productDetail = useSelector((state) => state.products.productDetail);

  if (!productDetail || !productDetail.images) {
    return <div>Image cannot be found </div>;
  }
  return (
    <div className=" flex flex-col justify-center md:w-[475px] md:h-[525px] ">
      <Carousel className="md:w-[450px] md:h-[500px] w-[325px] h-[325px] overflow-hidden  ">
        {productDetail.images.map((img, idx) => (
          <div key={idx} className="flex">
            <img
              src={img.url}
              alt={`Product ${idx}`}
              className="flex object-fill object-center overflow-hidden w-full"
            />
          </div>
        ))}
      </Carousel>
      <div className="flex items-center justify-start flex-wrap gap-5 mt-5 ">
        {productDetail.images.map((opt, idx) => (
          <div key={idx} className="w-[100px] h-[100px]  ">
            <img
              src={opt.url}
              alt={`Option ${idx}`}
              className="flex object-fill object-center overflow-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
