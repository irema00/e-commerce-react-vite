import React, { useState, useEffect } from "react";
import { useData } from "../contexts/DataContext";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { headerData } = useData();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    const activeItem = headerData.menuItems.find(
      (item) => item.path === location.pathname
    );
    if (activeItem) {
      setActiveMenu(activeItem.name);
    }
  }, [location, headerData.menuItems]);

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };


  const menuItemClass = (menuName) =>
    `cursor-pointer ${
      activeMenu === menuName
        ? "text-darkBg font-bold "
        : "text-neutral-500 font-semibold"
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

              {isMenuVisible ? (
                <Icon
                  icon="uiw:close"
                  className="mx-1"
                  onClick={toggleMenuVisibility}
                />
              ) : (
                <Icon
                  icon="tabler:menu-deep"
                  className="mx-1"
                  onClick={toggleMenuVisibility}
                />
              )}
          <div
            className={`${
              isMenuVisible ? "flex" : "hidden"
            } lg:flex sm:flex-row gap-2 text-hdGrey sm:text-sm text-xl flex-col font-bold font-monserrat leading-normal`}
          >
              {headerData.menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={menuItemClass(item.name)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center hover:text-semiGrey cursor-pointer"
                  >
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
              <p className="hover:text-blue-200 cursor-pointer">
                {headerData.loginText}
              </p>
              <span>/</span>
              <p className="hover:text-blue-200 cursor-pointer">
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
