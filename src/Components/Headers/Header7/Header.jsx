import React, { useState } from "react";
import "./Header.scss";

import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";

const Header = () => {
    const [popup, setpopup] = useState(false);
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
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Blog</Link>

          <div className="button">Contact Now</div>
        </div>
      </div>
      <div className="mob-header parent">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menuicon" onClick={() => setpopup(true)}>
         <GiHamburgerMenu />
        </div>
        {popup &&(
        <div className="click">
            <div className="cross" onClick={() => setpopup(false)}>
                <GiCrossMark />
            </div>
            <div className="click-menu">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Services</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Blog</Link>
                <div className="button">Contact Now</div>
            </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Header;
