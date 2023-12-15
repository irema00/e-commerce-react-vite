import React from "react";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";

export default function ProductDescription() {
  const { productData } = useData();

  return (
    <div className="flex flex-col md:px-[10%] px-[5%]">
      <div className="flex flex-row md:justify-center justify-evenly items-center py-[3%] font-extrabold md:text-lg text-xs text-hdGrey md:gap-8 md:border-b border-solid border-semiGrey border-opacity-">
        <p className="font-bold md:no-underline text-underline ">Description</p>
        <p>Additional Information</p>
        <p>
          Reviews <span className="text-teal-700">(0)</span>
        </p>
      </div>

      <div className="flex items-start justify-between flex-wrap  mt-6 ">
        <div className="py-[3%] flex justify-center border-solid border-t-semiGrey md:basis-1/3">
          <div className=" relative bg-detailImgBg rounded-lg flex md:w-[300px] md:h-[350px] w-[300px] h-[275px]">
            <img
              className="flex absolute rounded-lg  h-full w-full -left-3 -top-3  justify-center "
              src={productData.detailImgUrl}
              alt="Product Image"
            />
          </div>
        </div>

        <div className="flex flex-col md:basis-1/3 gap-5 ">
          <div className="flex flex-col md:basis-1/3 text-slate-800 text-2xl font-bold  leading-loose tracking-tight">
            <h2>{productData.detailText}</h2>
          </div>
          <div classNAme="flex text-slate-800 text-2xl font-bold  leading-loose tracking-tight">
            <p className="flex">{productData.detailPg}</p>
          </div>
          <div classNAme="flex text-slate-800 text-2xl font-bold  leading-loose tracking-tight">
            <div>
              <p className="flex">{productData.detailPg}</p>{" "}
            </div>
          </div>
          <div classNAme="flex text-slate-800 text-2xl font-bold  leading-loose tracking-tight">
            <p className="flex">{productData.detailPg}</p>
          </div>
        </div>

        <div className="flex flex-col gap-7 ">
          <div className="flex flex-col md:basis-1/3 text-slate-800 text-2xl font-bold  leading-loose tracking-wide gap-4 ">
            <h2>{productData.detailTitle}</h2>
            <div className="flex gap-3">
              <Icon icon="teenyicons:right-outline" color="gray" />
              <h6 className="flex text-hdGrey font-bold text-lg  leading-normal tracking-tight">
                {productData.detailText}
              </h6>
            </div>
            <div className="flex gap-3">
              <Icon icon="teenyicons:right-outline" color="gray" />
              <h6 className="flex text-hdGrey font-bold text-lg  leading-normal tracking-tight">
                {productData.detailText}
              </h6>
            </div>
            <div className="flex gap-3">
              <Icon icon="teenyicons:right-outline" color="gray" />
              <h6 className="flex text-hdGrey font-bold text-lg  leading-normal tracking-tight">
                {productData.detailText}
              </h6>
            </div>
            <div className="flex gap-3">
              <Icon icon="teenyicons:right-outline" color="gray" />
              <h6 className="flex text-hdGrey font-bold text-lg  leading-normal tracking-tight">
                {productData.detailText}
              </h6>
            </div>
          </div>

          <div className="flex flex-col md:basis-1/3 text-slate-800 text-2xl font-bold  leading-loose tracking-tight gap-4 ">
            <h2>{productData.detailTitle}</h2>
            <div className="flex gap-3">
              <Icon icon="teenyicons:right-outline" color="gray" />
              <h6 className="flex text-hdGrey font-bold text-lg  leading-normal tracking-tight">
                {productData.detailText}
              </h6>
            </div>
            <div className="flex gap-3">
              <Icon icon="teenyicons:right-outline" color="gray" />
              <h6 className="flex text-hdGrey font-bold text-lg  leading-normal tracking-tight">
                {productData.detailText}
              </h6>
            </div>
            <div className="flex gap-3">
              <Icon icon="teenyicons:right-outline" color="gray" />
              <h6 className="flex text-hdGrey font-bold text-lg  leading-normal tracking-tight">
                {productData.detailText}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
