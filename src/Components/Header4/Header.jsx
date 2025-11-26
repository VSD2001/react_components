import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./header.scss";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Header = () => {
  const [openPopup, setopenPopup] = useState(false);
  return (
    <>
      <div className="header parent">
        <div className="menu1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="menu2">
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* //------------------Mobile View------------------ */}

      <div className="mobile-header parent">
        <div className="toggle" onClick={() => setopenPopup(true)}>
          <MdMenu />
        </div>
        <div className="logo">
          <img src={logo} />
        </div>
        {openPopup && (
          <div className="menu-list-parent">
            <div className="menu-list">
              <div className="logo">
                <img src={logo} />
              </div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/careers">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <FaXTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="close" onClick={() => setopenPopup(false)}>
                <IoClose />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
