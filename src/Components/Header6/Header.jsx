import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { IoClose, IoShareSocial } from "react-icons/io5";

const Header = () => {
  const [openPopup, setopenPopup] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);
  return (
    <>
      <div className="header parent">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Service</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <div className="right">
          <button>ContactUs</button>
          <div className="social-media">
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
      </div>
      {/* //------------------Mobile View------------------ */}
      <div className="mobile-header">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="toggle" onClick={() => setopenPopup(true)}>
          <MdMenu />
        </div>
        <div className="media" onClick={() => setOpenMedia(true)} >
          <IoShareSocial />
        </div>
        {openMedia &&(
               <div className="icons">
            <a className="fb" href="https://www.facebook.com" target="_blank">
              <FaFacebookF />
            </a>
            <a className=" twitter" href="https://www.twitter.com" target="_blank">
              <FaXTwitter />
            </a>
            <a className="insta" href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a className="li" href="https://www.linkedin.com" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        )}
        {openPopup && (
          <div className="options">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <button>ContactUs</button>
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
