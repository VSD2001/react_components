import React, { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./header.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Header = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  return (
    <>
      <div className="header-parent parent">
        <div className="sidebar">
          <div className="menu-toggle" onClick={() => setOpenmenu(true)}>
            <IoMenu />
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="social-menu" onClick={() => setOpenSocial(true)}>
            <SlOptions />
          </div>
        </div>
        {openmenu && (
          <div className="menu-popup" onClick={() => setOpenmenu(false)}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Portfolio</Link>
            <div className="close" onClick={() => setOpenmenu(false)}>
              <IoCloseSharp />
            </div>
          </div>
        )}

       {
        openSocial && ( <div className="pop-social" onClick={() => setOpenSocial(false)}>
           
          <div className="social-menu">
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
             <div className="close" onClick={() => setOpenSocial(false)}>
             <SlOptions />
            </div>
          </div>
        </div>)
       }
      </div>
    </>
  );
};

export default Header;
