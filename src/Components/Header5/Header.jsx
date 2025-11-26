import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [openPopup ,setopenPopup] = useState(false);
  return (
    <>
      <div className="header parent">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      {/* //------------------Mobile View------------------ */}
      <div className="mobile-header parent">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="toggle" onClick={() => setopenPopup(true)}>
          <MdMenu />
        </div>
        {openPopup && (
            <div className="options">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <div className="close" onClick={() => setopenPopup(false)}>
            <IoClose />

          </div>
        </div>

        )}

      
      </div>
    </>
  );
};

export default Header;
