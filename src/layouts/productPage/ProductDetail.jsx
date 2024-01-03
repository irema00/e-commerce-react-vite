import React, { useEffect } from "react";
import ProductDetailCarousel from "../productPage/ProductDetailCarousel";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetailById } from "../../store/actions/productActions";

export default function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.productId;
  const productDetail = useSelector((state) => state.products.productDetail);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetailById(productId));
    }
  }, []);
  const starsDisplay = () => {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <Icon
              key={`full-${index}`}
              icon="mingcute:star-fill"
              color="rgb(243,205,3)"
            />
          ))}
        {halfStar > 0 && (
          <Icon icon="mingcute:star-half-fill" color="rgb(243,205,3)" />
        )}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <Icon
              key={`empty-${index}`}
              icon="mingcute:star-line"
              color="rgb(243,205,3)"
            />
          ))}
      </>
    );
  };
  return (
    <div className="flex flex-col px-[10%] bg-ltGrey ">
      <div className="flex flex-row md:justify-between  justify-center flex-wrap w-full font-montserrat py-6   ">
        <div className="flex gap-2 text-md tracking-tight font-bold   ">
          <div className=" flex text-darkBg ">
            <p>Home</p>
          </div>
          <Icon icon="uiw:right" color="lightgray" />
          <div className=" flex text-semiGrey">
            <p>Shop</p>
          </div>
        </div>
      </div>
      <div className="flex mx-auto my-12 md:p-8 ">
        <div className="flex flex-col lg:flex-row">
          <div className=" lex justify-center items-center">
            <ProductDetailCarousel />
          </div>
          <div className="flex-1 px-4 pt-2">
            <h1 className="text-xl font-normal md:pt-0 pt-10 text-darkBg">
              {productDetail.name}
            </h1>
            <div className="my-2 flex gap-3 items-center">
              <span className="flex gap-1 py-2">{starsDisplay()}</span>
              <p>
                <span>{productDetail.rating}</span>
              </p>
            </div>
            <div className="my-2">
              <span className="text-xl font-extrabold">
                ${productDetail.price}
              </span>
            </div>
            <div className="my-2">
              <span className="text-sm font-bold flex gap-2 leading-6">
                <p className="text-hdGrey">Availability: </p>
                <p className="text-prBlue">{productDetail.stock}</p>
              </span>
            </div>
            <p className="my-4 text-gray-600 border-solid border-semiGrey border-b pb-6 pt-3">
              {productDetail.description}
            </p>

            <div className="flex items-center gap-2 pb-8">
              <div className="w-6 h-6 bg-blue-500 rounded-full" />
              <div className="w-6 h-6 bg-teal-300 rounded-full" />
              <div className="w-6 h-6 bg-orange-400 rounded-full" />
              <div className="w-6 h-6 bg-black rounded-full" />
            </div>
            <div className="flex items-center gap-3">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-3 md:px-4 py-3 px-3 rounded">
                Select Options
              </button>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <Icon icon="mdi:heart-outline" />
              </div>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <Icon icon="bi:cart" />
              </div>
              <div className=" items-center flex  w-9 h-9 border-2 border-solid border-semiGrey bg-white rounded-full justify-center">
                <Icon icon="mdi:eye" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
