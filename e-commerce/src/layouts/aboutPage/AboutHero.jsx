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
      <div className="flex flex-col justify-center gap-8 items-start ">
        <h5 className="text-sm font-bold tracking-tight">ABOUT COMPANY</h5>
        <h1 className="text-5xl font-bold">ABOUT US</h1>
        <p className="text-lg font-semibold text-hdGrey w-[350px]">
          We know how large objects will act, but things on a small scale
        </p>
        <button className="bg-prBlue text-white  text-sm font-semibold px-8 py-4 rounded">
          Get Quote Now
        </button>
      </div>

      <div className="flex pl-10  relative  ">
        <img
          src={elips3}
          className="flex self-start items-start top-0 bottom-0"
        />
        <img src={elips1} className="flex self-end items-end mb-20 pl-" />
        <img
          src={elips4}
          className="flex items-center justify-center w-auto "
        />
        <img
          src={technology1}
          className="absolute w-auto h-full inset-x-[20%] "
        />
        <img src={elips2} className="flex self-center items-start pl-7" />
        <img
          src={elips1}
          className="flex self-center items-start pr-3 pb-[170px]"
        />
      </div>
    </div>
  );
}
