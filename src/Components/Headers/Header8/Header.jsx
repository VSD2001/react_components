import React, { useState } from "react";
import "./header.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [openPopup, setopenPopup] = useState(false);
  return (
    <>
      <div className="header1 parent">
        <div className="mail">
          <a href="https://mail.google.com">varad2001deshpande@gmail.com</a>
        </div>

        <div className="socialmedia">
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
      </div>
      <div className="header2 parent">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Portfolio</Link>
          <Link to="/contact">Contact</Link>
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
          <div className="popup">
            <div className="options">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/careers">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>
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
