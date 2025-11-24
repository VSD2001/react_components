import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

import { MdDashboardCustomize } from "react-icons/md";
import logo from "../../Assets/logo.png";

const Header = () => {
  const [popup, setPopup] = useState(false);
  const [closepopup , setclosepopup] = useState(false);
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
          <Link to="/">Portfolio</Link>
        </div>
        <div className="dash" onClick={() => setPopup(true)}>
          <MdDashboardCustomize />
        </div>
        {popup && (
          <div className="dash-para">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              reiciendis eum maxime hic, laborum modi pariatur id non dolorem
              in, illum, ut sunt ullam quidem possimus officia beatae
              praesentium iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate quidem iste vero impedit accusamus natus ex hic quasi perferendis beatae quam eum totam, autem numquam vitae nesciunt asperiores. Ipsa, quibusdam fuga voluptates vel ea deserunt totam eos aspernatur sit.
            </p>

            <div className="dashicon" onClick={() => setPopup(false)}>
              <ImCross />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
