import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import hero from "../../assets/hero.jpg";
import logo1 from "../../assets/logo1.png";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [openPopup, setopenPopup] = useState(false);
  return (
    <>
      <div className="hero parent">
        <img src={hero} />
        <div className="header parent">
          <div className="logo">
            <Link to="/">
              <img src={logo1} />
            </Link>
          </div>
          <div className="menu" onClick={() => setopenPopup(true)}>
            <div className="symbol">
              <FaPlus />
            </div>
            <p>MENU</p>
          </div>
        </div>
        {openPopup && (
            <div className="popup">
          <div className="logo">
            <Link to="/">
              <img src={logo1} />
            </Link>
          </div>
          <div className="close" onClick={() => setopenPopup(false)}>
            <IoClose />
            <p>CLOSE</p>
          </div>
          <div className="options">
            <Link to="/" className="h"><span>HOME</span></Link>
            <Link to="/about" className="a"><span>ABOUT</span></Link>
            <Link to="/services" className="s"><span>SERVICES</span></Link>
            <Link to="/blog" className="b"><span>BLOG</span></Link>
            <Link to="/careers" className="p"><span>PORTFOLIO</span></Link>
            <Link to="/contact" className="c"><span>CONTACT</span></Link>
          </div>
        </div>

        )}
        
      </div>
    </>
  );
};

export default Header;
