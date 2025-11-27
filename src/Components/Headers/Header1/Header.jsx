import React, { useState } from "react";
import "./header.scss";
import logo from "../../../Assets/logo.png";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const header = () => {
  const [popup , setPopup] = useState(false);
  const [closeslide ,setCloseSlide] = useState(false);
  const [closedash ,setCloseDash] = useState(false);
  return (
    <>
      <div className="header parent">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Portfolio</Link>
        </div>
        <div className="dash" onClick={() => setPopup(true)}>
          <MdDashboardCustomize />
        </div>
        {popup && (
                <div className="open-dash">
          <div className="popup-menu">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit molestiae dolore quas quibusdam cum culpa aliquam similique. Non, provident excepturi earum ipsa voluptate doloremque odit voluptatibus reprehenderit possimus. Dolore!</p>
            <div className="close" onClick={() => setPopup(false)}><IoClose /></div>
          </div>
        </div>
        )}
  
      </div>
      {/* mobile view popup menu */}
      <div className="header1 parent">
        <div className="menu " onClick={() => setCloseSlide(true)}>
          <GiHamburgerMenu />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dash" onClick={() => setCloseDash(true)}>
          <MdDashboardCustomize />
        </div>
        {closeslide && (
           <div className="popup2-menu">
          <div className="menu-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Portfolio</Link>
              <div className="close" onClick={() => setCloseSlide(false)}>
            <IoClose />
          </div>
          </div>
        
      

        </div>
        )}
       
   { closedash && (
         <div className="popup3-dash">
          <div className="dash-list">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit molestiae dolore quas quibusdam cum culpa aliquam similique. Non, provident excepturi earum ipsa voluptate doloremque odit voluptatibus reprehenderit possimus. Dolore!</p>
            <div className="close" onClick={() => setCloseDash(false)}>
              <IoClose />
            </div>
          </div>
          
        </div>
   )}
        
      </div>
    </>
  );
};

export default header;
