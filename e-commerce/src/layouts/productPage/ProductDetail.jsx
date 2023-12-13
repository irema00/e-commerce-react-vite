import React from "react";
import ProductCard from "../../components/ProductCard";
import { useData } from "../../contexts/DataContext";
import ProductDetailCarousel from "../productPage/ProductDetailCarousel";

export default function ProductDetail() {
  const { productData } = useData();
  return (
    <div>
      <div>Home Shop</div>
      <div className="container mx-auto my-12 p-8">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex justify-center items-center">
            <ProductDetailCarousel />
          </div>
          <div className="flex-1 px-4">
            <h1 className="text-3xl font-bold">{productData.productName}</h1>
            <div className="my-2">
              <span>{productData.reviewNumber} Reviews</span>
            </div>
            <div className="my-2">
              <span className="text-xl font-bold">{productData.price}</span>
            </div>
            <div className="my-2">
              <span className="text-green-500">
                Availability: {productData.availability}
              </span>
            </div>
            <p className="my-4 text-gray-600">{productData.description}</p>

            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Select Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
