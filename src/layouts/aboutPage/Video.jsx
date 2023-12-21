import React from "react";
import video from "../../assets/contact/video.jpg";

export default function Video() {
  return (
    <div className="flex px-[10%] py-[10%] items-center justify-center">
      <img src={video} className="w-screen" />
    </div>
  );
}
