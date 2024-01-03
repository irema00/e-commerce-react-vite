import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);
  return (
    <Link to={`/product/${product.id}`} className="no-underline">
      <div className="flex flex-col flex-wrap items-center mb-8 shadow-xl md:hover:scale-110 cursor-pointer w-[370px] md:w-[260px] ">
        <div className=" w-[95%] h-[95%px]  cursor-pointer overflow-hidden">
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="object-cover object-center border-solid border border-[#fbfafa] "
          />
        </div>
        <div className="flex gap-2 flex-col items-center mt-3 mb-5 bg-gray-50 mx-3">
          <h3 className=" text-darkBg text-base font-bold leading-normal tracking-tight mt-2">
            {product.name}
          </h3>
          <p
            className="text-center items-center text-hdGrey text-sm font-bold leading-normal tracking-tight px-[5%] h-[40px]  hover:text-ellipsis truncate-description hover:cursor-pointer overflow-hidden "
            onMouseEnter={() => setShowPopover(true)}
            onMouseLeave={() => setShowPopover(false)}
            ref={popoverRef}
          >
            {product.description}
          </p>
          {showPopover && (
            <div
              className="absolute z-10 w-64 bg-white p-2 border rounded shadow-lg  text-hdGrey text-sm font-bold leading-normal"
              style={{ top: popoverRef.current.offsetTop + 20 }}
            >
              {product.description}
            </div>
          )}
          <div className="flex justify-evenly w-full  text-center ">
            <span className="text-semiGrey text-base font-bold leading-normal tracking-tight">
              ${parseFloat(product.price).toFixed(2)}
            </span>
            <span className="text-teal-700 text-base font-bold leading-normal tracking-tight">
              ${parseFloat(product.price).toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-1 mb-5">
            <div className="w-4 h-4 bg-blue-500 rounded-full" />
            <div className="w-4 h-4 bg-teal-700 rounded-full" />
            <div className="w-4 h-4 bg-orange-400 rounded-full" />
            <div className="w-4 h-4 bg-black rounded-full" />{" "}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
