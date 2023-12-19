import React from "react";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col flex-wrap items-center mb-8 shadow-xl md:hover:scale-110 cursor-pointer">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="object-cover w-[300px]  object-center md:w-[250px] md:max-h-[400px] cursor-pointer"
      />
      <div className="flex gap-2 flex-col items-center mt-3 mb-5">
        <h3 className="w-32 text-center text-darkBg text-base font-bold leading-normal tracking-tight mt-2">
          {product.title}
        </h3>
        <p className="text-center text-hdGrey text-sm font-bold leading-normal tracking-tight">
          {product.department}
        </p>
        <div className="flex justify-evenly w-full">
          <span className="text-semiGrey text-base font-bold leading-normal tracking-tight">
            {product.price}
          </span>
          <span className="text-teal-700 text-base font-bold leading-normal tracking-tight">
            {product.newPrice}
          </span>
        </div>
        <div className="flex items-center gap-1 ">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <div className="w-4 h-4 bg-teal-700 rounded-full" />
          <div className="w-4 h-4 bg-orange-400 rounded-full" />
          <div className="w-4 h-4 bg-black rounded-full" />{" "}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
