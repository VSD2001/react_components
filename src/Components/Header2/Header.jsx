import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="headerparent parent">
        <div className="headercontainer cont">
          <div className="logo">
            <img src={logo} alt="mylogo" />
          </div>
          <div className="menu">
            

          </div>
          <div className="menuicon"></div>

        </div>
      </div>
    </>
  );
};

export default Header;
