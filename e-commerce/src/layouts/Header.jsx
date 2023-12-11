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
    <div className="">
      <div className="bg-darkBg text-whiteText flex justify-between items-center flex-wrap gap-2 font-montserrat font-semibold text-sm px-10 h-[54px]">
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
              icon={faInstagram}
              size="lg"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="lg"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between font-montserrat gap- px-10 h-[68px]">
        <div className=" flex flex-row items-center flex-wrap gap-16">
          <div className="text-2xl font-bold  font-montserrat">
            <p>{headerData.brandName}</p>
          </div>
          <div className="flex flex-row gap-2 text-hdGrey text-sm font-bold font-monserrat leading-normal pl-16 ">
            <ul className="flex flex-row tracking-wider gap-3 list-none p-0 m-0">
              {headerData.menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={menuItemClass(item.name)}
                >
                  {item.label}
                  {activeMenu === item.name && (
                    <span className="ml-2">
                      <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <div className="text-prBlue flex-row flex items-center gap-2 text-sm font-bold font-monserrat ">
            <FontAwesomeIcon
              icon={faUser}
              bg-prBlue
              size="sm"
              style={{ color: "rgba(35, 166, 240, 1)" }}
            />
            <div className="flex flex-row text-sm font-bold tracking-wider gap-1">
              <p>{headerData.loginText}</p>
              <span>/</span>
              <p>{headerData.registerText}r</p>
            </div>
          </div>

          <div className="flex flex-row gap-8 items-center text-prBlue ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{
                color: "rgba(35, 166, 240, 1)",
              }}
            />
            <div>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "rgba(35, 166, 240, 1)" }}
              />
              <span>{headerData.cartProductCount}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "rgba(35, 166, 240, 1)" }}
              />
              <span>{headerData.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
