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
    <Link
      to={`/${product.category_id}/${product.id}/${slugify(product.name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      })}`}
      className="no-underline"
    >
      <div className="flex flex-col flex-wrap items-center mb-8 shadow-xl md:hover:scale-110 cursor-pointer w-[370px] md:w-[260px]  gap-2">
        <div className=" w-[95%] h-[95%px]  cursor-pointer overflow-hidden">
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="object-cover object-center border-solid border border-[#fbfafa] "
          />
            onClick={handleAddToCart}
  );
}

export default ProductCard;
