import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const menuItems = [
    { name: "home", label: "Home" },
    { name: "shop", label: "Shop" },
    { name: "about", label: "About" },
    { name: "blog", label: "Blog" },
    { name: "contact", label: "Contact" },
    { name: "pages", label: "Pages" },
  ];

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const menuItemClass = (menuName) =>
    `cursor-pointer ${
      activeMenu === menuName ? "text-darkBg font-light" : "text-neutral-500"
    }`;

  return (
      <div className="bg-darkBg text-whiteText flex justify-between items-center flex-wrap gap-2 font-montserrat font-semibold text-sm px-10 h-[54px]">
        <div className="flex items-center gap-7 font-semibold ">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              style={{ color: "#ffffff" }}
            />
            <p>(225) 555-0118 </p>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        <div className="font-semibold text-sm ">
          Follow Us and get a chance to win 80% off
        </div>

        <div className="flex gap-4 justify-center items-center">
          <div className="text-white text-sm font-bold font-monserrat leading-normal tracking-tight flex flex-row gap-2 ">
            <p>Follow Us</p> <span>:</span>
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

          <div className="flex flex-row gap-2 text-hdGrey text-sm font-semibold font-monserrat leading-normal tracking-tight">
            <ul className="flex flex-row gap-4 list-none p-0 m-0">
              {menuItems.map((item) => (
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
    
    </>
  )
}
