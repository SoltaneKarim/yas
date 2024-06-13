import React from 'react'
import { pictures } from "../assets/music1";
import { palestine } from "../assets/music3";

const Navbar = () => {
  return (
    <div className='navbar'>
    <img className="offLogo" src={pictures.logo} alt="logo" />
    <img className="offLogo2" src={palestine.logoPal} alt="logo" />
    </div>
  )
}

export default Navbar
