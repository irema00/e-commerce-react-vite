import React, { useState } from "react";
import { useData } from "../contexts/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const { headerData } = useData();

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const menuItemClass = (menuName) =>
    `cursor-pointer ${
      activeMenu === menuName ? "text-darkBg font-light" : "text-neutral-500"
    }`;

  return (
    <div className="w-full flex-wrap ">
      <div className="bg-darkBg text-whiteText flex justify-between items-center flex-wrap gap-2 font-montserrat font-semibold text-sm px-10 py-4">
        <div className="flex items-center gap-7 font-semibold ">
          <div className="flex items-center gap-2 tracking-wider ">
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              style={{ color: "#ffffff" }}
            />
            <p>{headerData.contactNumber} </p>
          </div>
          <div className="flex items-center gap-2 tracking-wider ">
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
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
          <div className="flex gap-4">
            <FontAwesomeIcon
              className=" cursor-pointer hover:scale-110 "
              icon={faInstagram}
              size="lg"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className=" cursor-pointer hover:scale-110 "
              size="lg"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className=" cursor-pointer hover:scale-110 "
              size="lg"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className=" cursor-pointer hover:scale-110 "
              size="lg"
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
            <ul className="flex flex-row tracking-wider gap-3 list-none ">
              {headerData.menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={menuItemClass(item.name)}
                >
                  {item.label}
                  {activeMenu === item.name && (
                    <span className="ml-2 ">
                      <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 ">
          <div className="text-prBlue flex-row flex items-center gap-2 text-sm font-bold font-monserrat ">
            <FontAwesomeIcon icon={faUser} className="text-prBlue " size="sm" />
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
            <FontAwesomeIcon
              className="hover:scale-110 cursor-pointer"
              icon={faMagnifyingGlass}
              style={{
                color: "rgba(35, 166, 240, 1)",
              }}
            />
            <div>
              <FontAwesomeIcon
                className="hover:scale-110 cursor-pointer"
                icon={faCartShopping}
                style={{ color: "rgba(35, 166, 240, 1)" }}
              />
              <span className="ml-2 ">{headerData.cartProductCount}</span>
            </div>
            <div>
              <FontAwesomeIcon
                className="hover:scale-110 cursor-pointer"
                icon={faHeart}
                style={{ color: "rgba(35, 166, 240, 1)" }}
              />
              <span className="ml-2 ">{headerData.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
