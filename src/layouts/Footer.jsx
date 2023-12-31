import React from "react";
import { useData } from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { footerData } = useData();
  return (
    <div className=" text-darkBg flex flex-col  font-montserrat  ">
      <div className=" bg-ltGrey  px-[10%] items-center flex-wrap ">
        <div className="flex flex-wrap flex-col md:flex-row md:no-gap gap-8 justify-between py-6 ">
          <p className="text-2xl font-bold">{footerData.brandName}</p>

          <div className="flex items-center space-x-4 ">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-prBlue h-6 w-6"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-prBlue h-6 w-6"
            />
            <FontAwesomeIcon icon={faTwitter} className="text-prBlue h-6 w-6" />
          </div>
        </div>
      </div>
      <hr className="border-1 border-solid border-inputBorder mx-[10%] "></hr>
      <div className="bg-white  px-[10%] py-8  font-montserrat font-bold">
        <div className=" bg-white flex flex-wrap justify-between gap-5 items-start  lg:flex-nowrap flex-col sm:flex-row">
          {footerData.footerSections.map((section, index) => (
            <div
              key={index}
              className=" mb-4 md:mb-0 md:w-1/5 flex flex-col justify-start flex-wrap md:no-wrap"
            >
              <h5 className="text-lg font-semibold">{section.title}</h5>
              <ul className="mt-4 flex items-start justify-start flex-col flex-wrap ">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="mt-2 text-sm text-hdGrey leading-6 tracking-wide "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className=" md:w-1/5 mt-8 md:mt-0 flex flex-col">
            <h5 className="text-lg font-semibold mb-4">
              {footerData.inputTitle}
            </h5>
            <form className="flex  ">
              <input
                type="email"
                placeholder="Your Email"
                className=" py-3 
                border
              border-solid border-inputBorder rounded-l-md focus:outline-none focus:border-prBlue bg-ltGrey  text-hdGrey  font-normal "
              />
              <button
                type="submit"
                className="bg-prBlue px-3 text-white text-xs font-light rounded-r-md hover:bg-blue-600 "
              >
                {footerData.buttonText}
              </button>
            </form>
            <p className="mt-4 text-sm leading-7 text-hdGrey">
              {footerData.inputSubtext}
            </p>
          </div>
        </div>
      </div>
      <p className="md:text-left font-montserrat text-sm font-bold md:px-[10%] px-[22%] justify-center text-center md:items-start flex-col text-hdGrey flex items-center bg-ltGrey py-4 ">
        {footerData.copyright}
      </p>
    </div>
  );
}
