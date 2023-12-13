import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const { headerData } = useData();

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const menuItemClass = (menuName) =>
    `cursor-pointer ${
      activeMenu === menuName ? "text-darkBg font-light " : "text-neutral-500"
    }`;

  return (
    <div className="w-full flex-wrap ">
      <div className="bg-darkBg text-whiteText flex justify-between items-center flex-wrap gap-2 font-montserrat font-semibold text-sm px-10 py-4">
        <div className="flex items-center gap-7 font-semibold ">
          <div className="flex items-center gap-2 tracking-wider ">
            <Icon icon="bi:telephone" color="white" />

            <p>{headerData.contactNumber} </p>
          </div>
          <div className="flex items-center gap-2 tracking-wider ">
            <Icon icon="bi:envelope" color="white" />
            <p>{headerData.contactEmail}</p>
          </div>
        </div>

        <div className="font-semibold text-sm tracking-wide ">
          {headerData.followUsText}
        </div>

        <div className="flex gap-4 justify-center items-center">
          <div className="text-white text-sm font-bold font-monserrat leading-normal tracking-wide flex flex-row gap-2 ">
            <p>{headerData.socialText}</p> <span>:</span>
          </div>
          <div className="flex gap-4 items-center">
            <Icon
              icon="teenyicons:instagram-outline"
              color="white"
              className="cursor-pointer hover:scale-110 "
            />
            <Icon
              className=" cursor-pointer hover:scale-110 "
              icon="bi:youtube"
              color="white"
            />
            <Icon
              icon="bi:facebook"
              color="white"
              className=" cursor-pointer hover:scale-110 "
            />
            <Icon
              icon="mdi:twitter"
              color="white"
              className=" cursor-pointer hover:scale-110 "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between flex-wrap w-full font-montserrat py-5 px-10">
        <div className=" flex flex-row items-center flex-wrap gap-16">
          <div className="text-2xl font-bold  font-montserrat">
            <p>{headerData.brandName}</p>
          </div>
          <div className="flex flex-row gap-2 text-hdGrey text-sm font-bold font-monserrat leading-normal pl-16 ">
            <ul className="flex flex-row tracking-wider gap-6 list-none  ">
              {headerData.menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={menuItemClass(item.name)}
                >
                  <Link to={item.path}>
                    {item.label}
                    {activeMenu === item.name && (
                      <span className="ml-2 flex flex-row">
                        <Icon icon="bi:chevron-down" />
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 ">
          <div className="text-prBlue flex-row flex items-center gap-2 text-sm font-bold font-monserrat ">
            <Icon
              className="text-prBlue "
              icon="mdi:user-outline"
              color="rgba(35, 166, 240, 1)"
            />
            <div className="flex flex-row text-sm font-bold tracking-wider gap-1">
              <p className="hover:scale-110 cursor-pointer">
                {headerData.loginText}
              </p>
              <span>/</span>
              <p className="hover:scale-110 cursor-pointer">
                {headerData.registerText}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-8 items-center text-prBlue ">
            <Icon
              className="hover:scale-110 cursor-pointer"
              icon="streamline:magnifying-glass"
              color="rgba(35, 166, 240, 1)"
            />

            <div className="flex items-center">
              <Icon
                className="hover:scale-110 cursor-pointer"
                icon="bi:cart"
                color="rgba(35, 166, 240, 1)"
              />
              <span className="ml-2 ">{headerData.cartProductCount}</span>
            </div>
            <div className="flex items-center">
              <Icon
                className="hover:scale-110 cursor-pointer"
                icon="ph:heart"
                color="rgba(35, 166, 240, 1)"
              />

              <span className="ml-2 ">{headerData.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
