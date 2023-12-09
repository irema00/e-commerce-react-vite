import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <>
    <div className="bg-darkBg text-whiteText flex flex-row gap-2 font-montserrat leading-normal tracking-tight" >
      <div><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} /> (225) 555-0118</div>
    <div><FontAwesomeIcon icon={faEnvelope} /> michelle.rivera@example.com</div>
      <div>Follow Us and get a chance to win 80% off</div>
      <div className="flex flex-"><div className="text-white text-sm font-bold font-monserrat leading-normal tracking-tight">Follow Us :</div>icons</div>
    </div>
    <div>
      <div> BrandName </div>
      <div><div>Home</div>
      <div>Shop</div>
      <div>About</div>
      <div>Blog</div>
      <div>Contact</div>
      <div>Pages</div></div>
<div> <div>icon Login/Register</div></div>
<div><div>incele</div>
<div>cart</div>
<div>heart</div></div>
    </div>
    
    </>
  )
}
