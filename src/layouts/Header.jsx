import React, { useState, useEffect } from "react";
import { useData } from "../contexts/DataContext";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import pp1 from "../assets/pp1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/userActions";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { headerData } = useData();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    console.log(location.pathname);
    const activeItem = headerData.menuItems.find(
      (item) => item.path === location.pathname
    );
    if (activeItem) {
      setActiveMenu(activeItem.name);
    }
    setIsMenuVisible(true);

    if (location.pathname === "/signup" || location.pathname === "/login") {
      setIsMenuVisible(false);
    }
    setUserName(localStorage.getItem("userName"));
  }, [isLoggedIn, location, headerData.menuItems]);

  const handleMenuClick = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
    if (showUserMenu) {
      setShowUserMenu(false);
    }
  };
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };

  const menuItemClass = (menuName) =>
    `cursor-pointer ${
      activeMenu === menuName
        ? "text-darkBg font-bold "
        : "text-neutral-500 font-semibold"
    }`;

  const promptLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userGravatar");
    setShowLogoutModal(false);
    navigate("/");
  };

  return (
    <div className="w-full flex-wrap ">
      <div className="bg-darkBg lg:flex hidden text-whiteText justify-between items-center flex-wrap gap-2 font-montserrat font-semibold text-sm px-10 py-4 ">
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

      <div
        className="flex 
      w-full flex-wrap justify-between font-montserrat py-5 px-10 "
      >
        <div className=" flex flex-row items-center justify-center  flex-wrap gap-16  w-full lg:w-auto ">
          <div className="flex justify-between w-full lg:w-auto text-2xl font-bold  ">
            <p className="flex ">{headerData.brandName}</p>
            <div className="flex lg:hidden items-center ">
              <Icon
                icon="bi:search"
                className="mx-1 hover:text-hdGrey cursor-pointer"
              />
              <Icon
                icon="ion:cart-outline"
                className="mx-1 hover:text-hdGrey cursor-pointer"
              />
              <Icon
                icon="tdesign:user"
                className="mx-1 hover:text-hdGrey cursor-pointer"
                onClick={toggleUserMenu}
              />
              {isMenuVisible ? (
                <Icon
                  icon="uiw:close"
                  className="mx-1 hover:text-hdGrey cursor-pointer"
                  onClick={toggleMenuVisibility}
                />
              ) : (
                <Icon
                  icon="tabler:menu-deep"
                  className="mx-1 hover:text-hdGrey cursor-pointer"
                  onClick={toggleMenuVisibility}
                />
              )}
            </div>
          </div>
          {showUserMenu && (
            <div className="sm:flex-row gap-2 text-hdGrey sm:text-md lg:text-sm  text-xl flex-col font-semibold font-monserrat  tracking-tighter  w-full justify-center lg:w-auto">
              <ul className="flex sm:flex-row flex-col justify-center items-center flex-wrap  tracking-wider gap-6 list-none  ">
                <li onClick={() => setShowUserMenu(false)}>
                  {isLoggedIn ? (
                    <span
                      onClick={promptLogout}
                      className="flex items-center hover:text-semiGrey
                      cursor-pointer"
                    >
                      Logout
                    </span>
                  ) : (
                    <Link
                      to="/login"
                      className="flex items-center hover:text-semiGrey cursor-pointer"
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li onClick={() => setShowUserMenu(false)}>
                  <Link
                    to="/signup"
                    className="flex items-center hover:text-semiGrey cursor-pointer"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center justify-center text-center text-md text-darkBg font-bold italic">
              <span>Hi, {userName}!</span>
            </div>
          )}
          {!showUserMenu && (
            <div
              className={`${
                isMenuVisible ? "flex" : "hidden"
              } lg:flex sm:flex-row gap-2 text-hdGrey sm:text-md lg:text-sm  text-xl flex-col font-bold font-monserrat leading-normal  w-full justify-center items-center lg:w-auto`}
            >
              <ul className="flex sm:flex-row flex-col justify-center items-center flex-wrap  tracking-wider gap-6 list-none  ">
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
          )}
        </div>

        <div className="lg:flex hidden flex-row  flex-wrap items-center gap-4 ">
          <div className="text-prBlue  flex-row flex items-center gap-2 text-sm font-bold font-monserrat ">
            <Icon
              className="text-prBlue "
              icon="mdi:user-outline"
              color="rgba(35, 166, 240, 1)"
            />
            <div className="flex flex-row text-sm font-bold tracking-wider gap-1">
              {isLoggedIn ? (
                <span
                  onClick={promptLogout}
                  className="cursor-pointer hover:text-blue-200"
                >
                  Logout
                </span>
              ) : (
                <Link
                  to="/login"
                  className="hover:text-blue-200 cursor-pointer"
                >
                  {headerData.loginText}
                </Link>
              )}
              <span>/</span>
              <Link to="/signup" className="hover:text-blue-200 cursor-pointer">
                {headerData.registerText}
              </Link>
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

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex shadow-2xl">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg ">
            <div className="flex text-lg font-bold justify-center ">
              Confirm Logout
            </div>
            <div className="flex my-4 justify-center">
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="flex justify-center gap-6  ">
              <button
                onClick={confirmLogout}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-red-400 hover:bg-red-600  text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
