import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./popupmenu.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom"; 
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"; 

const PopupMenu = ({ onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const content = (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <p>A clean and modern logo featuring simple geometric shapes that convey professionalism and clarity. Designed to represent a strong brand identity with minimalistic appeal.</p>
        <div className="social-media">
        <a href="#" className="Facebook">
          <i ><FaFacebook /></i>
        </a>
        <a href="#" className="Instagram">
          <i ><FaInstagram /></i>
        </a>
        <a href="#" className="Twitter">
          <i ><FaSquareXTwitter /></i>
        </a>
      </div>
      </div>
      
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

export default PopupMenu;
