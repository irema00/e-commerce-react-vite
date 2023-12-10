import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
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

    </div>
    
    </>
  )
}
