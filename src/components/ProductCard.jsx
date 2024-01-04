import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/shoppingCartActions";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col flex-wrap items-center mb-8 shadow-xl md:hover:scale-110 cursor-pointer w-[370px] md:w-[260px]  gap-2">
      <div className=" w-[95%] h-[95%px]  cursor-pointer overflow-hidden">
        <Link
          to={`/${product.category_id}/${product.id}/${slugify(product.name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          })}`}
          className="no-underline"
        >
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="object-cover object-center border-solid border border-[#fbfafa] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex gap-2 flex-col items-center mt-3 mb-5 mx-3">
        <h3 className=" text-darkBg text-base font-bold leading-normal tracking-tight mt-2">
          {product.name}
        </h3>
        <p
          className="text-center items-center text-hdGrey text-sm font-semibold leading-normal tracking-tight px-[5%] md:h-[40px]  hover:text-ellipsis md:truncate-description md:hover:cursor-pointer overflow-hidden "
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
          ref={popoverRef}
        >
          {product.description}
        </p>
        {showPopover && (
          <div
            className="absolute hidden md:flex z-50 w-64 bg-gradient-to-r from-gray-100 to-gray-300 p-2 border rounded shadow-lg  text-bgDark text-sm font-semibold leading-normal text-center "
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

        <div className="flex justify-space gap-3">
          <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-200 hover:to-blue-300 items-center text-sm  text-white rounded-full py-3 px-3 cursor-pointer ">
            <Icon icon="bi:heart-fill" className="cursor-pointer" />
          </div>
          <button
            onClick={handleAddToCart}
            className="flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-200 hover:to-blue-300 items-center text-white text-xs py-2 px-5 rounded-full cursor-pointer font-semibold gap-2 justify-center"
          >
            <Icon
              icon="uil:cart"
              width="20"
              height="20"
              className="items-center"
            />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
