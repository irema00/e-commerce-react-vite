import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";

export default function ProductDetailCarousel() {
  const productDetail = useSelector((state) => state.products.productDetail);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  if (!productDetail || !productDetail.images) {
    return <div>Image cannot be found </div>;
  }

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
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
          <div key={idx} className="md:w-[80px] md:h-[100px] w-[10%] ">
            <img
              src={opt.url}
              alt={`Option ${idx}`}
              className="flex object-fill object-center overflow-hidden hover:scale-110 cursor-pointer hover:border-2 hover:border-solid hover:border-hdGrey"
              onClick={() => openModal(opt.url)}
            />
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <img className="w-[440px]" src={selectedImage} />

            <Icon
              icon="uiw:close"
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
