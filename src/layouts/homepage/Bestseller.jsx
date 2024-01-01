import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestsellerProducts } from "../../store/actions/productActions";

export default function Bestseller() {
  const dispatch = useDispatch();
  const bestsellerProducts = useSelector((state) => state.bestseller);

  useEffect(() => {
    dispatch(fetchBestsellerProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col flex-wrap py-[5%] lg:px-[12%] px-0 font-monserrat gap-12 ">
      <div className="flex text-center flex-col py-8 ">
        <div className="text-center text-hdGrey text-xl font-normal leading-loose tracking-tight">
          Featured Products
        </div>
        <h2 className="font-bold text-xl tracking-normal mb-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="md:text-md font-bold text-xs sm:px-0 px-[20%] tracking-wide text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-3">
        {bestsellerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
