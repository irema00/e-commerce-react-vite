import React from "react";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";

export default function FeaturedPosts() {
  const { featuredPostsData } = useData();
  return (
    <div className="font-montserrat px-[10%] py-[5%] flex flex-col items-center justify-center cursor-pointer">
      <div className="flex flex-col text-center mb-20 ">
        <h5 className=" text-prBlue text-sm font-bold leading-normal tracking-wide mb-4">
          {featuredPostsData.topTitle}
        </h5>
        <h1 className=" text-darkBg text-4xl  tracking-normal font-bold mb-4">
          {featuredPostsData.title}
        </h1>
        <p className=" text-hdGrey text-sm font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description1}
        </p>
        <p className=" text-hdGrey text-sm font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description2}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 ">
        {featuredPostsData.posts.map((post) => (
          <div
            className="max-w-[350px] shadow-xl hover:shadow-2xl hover:animate-pulse hover:scale-110  "
            key={post.id}
          >
            <img
              className="object-cover object-center"
              src={post.imageUrl}
              alt={post.title}
            />
            <div className="p-5 flex flex-col gap-4 ">
              <div className="flex text-sm gap-4 text-hdGrey font-normal tracking-tighter">
                <p className="text-prBlue">Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>
              <h3 className="text-bgDark text-2xl font-semibold tracking-tight">
                {post.title}
              </h3>
              <p className="text-hdGrey font-normal tracking-tight">
                {post.description}
              </p>
              <div className="flex text-hdGrey font-normal justify-between text-sm tracking-tight">
                <div className="flex gap-2">
                  <Icon icon="lets-icons:clock" width="18" color="skyBlue" />
                  <p>{post.date}</p>
                </div>
                <div className="flex gap-2">
                  <Icon icon="mdi:graph-line" width="18 " color="green" />
                  <p>{post.commentsCount} comments</p>
                </div>
              </div>

              <a
                className="text-md font-semibold text-hdGrey flex items-center"
                href={post.learnMoreUrl}
              >
                Learn More{" "}
                <Icon icon="mingcute:right-line" width="28" color="skyBlue" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
