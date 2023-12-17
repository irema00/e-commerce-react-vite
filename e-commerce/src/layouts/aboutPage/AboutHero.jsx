import React from "react";
import career from "../../assets/contact/career.jpg";
import video from "../../assets/contact/video.jpg";
import elips1 from "../../assets/contact/elips1.png";
import elips2 from "../../assets/contact/elips2.png";
import elips3 from "../../assets/contact/elips3.png";
import elips4 from "../../assets/contact/elips4.png";
import technology1 from "../../assets/contact/technology1.png";

export default function AboutHero() {
  return (
    <div className="flex w-screen h-full justify-between px-[10%] py-[5%]">
      <div className="flex flex-col w-1/2 justify-center ">
        <h1 className="text-5xl font-bold">ABOUT US</h1>
        <p className="text-lg">
          We know how large objects will act, but things on a small scale
        </p>
        <button className="bg-blue-600 text-white uppercase text-sm px-6 py-3 rounded">
          Get Quote Now
        </button>
      </div>
      <div className="flex w-1/2  pl-10 border-2 border-solid border-x-light-green-400 relative  ">
        <img src={elips4} className="sticky items-center justify-center " />
        <img src={technology1} className="absolute w-full h-full inset-x-0 " />
      </div>
    </div>
  );
}
