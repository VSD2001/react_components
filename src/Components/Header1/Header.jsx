import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import { IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom";
import PopupMenu from "../PopupMenu/PopupMenu";

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleGridClick = () => {
    setOpenPopup((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>

        {/* Only one click handler */}
        <div className="grid" onClick={handleGridClick}>
          <IoGrid />
        </div>
      </div>

      {openPopup && <PopupMenu onClose={() => setOpenPopup(false)} />}
    </>
  );
};

export default Header;
