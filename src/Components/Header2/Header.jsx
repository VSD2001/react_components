import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { IoMenu } from "react-icons/io5";

import { MdDashboardCustomize } from "react-icons/md";
import logo from "../../Assets/logo.png";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [popup, setPopup] = useState(false);
 
  const [mobdash, setMobdash] = useState(false);
  const [menudash, setmenudash] = useState(false);
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
              in, illum, Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quos porro eos facilis quo aliquid! Voluptatem cupiditate
              corporis neque sint temporibus amet nulla doloribus tempora
              adipisci. Deleniti dicta autem cum sint officiis officia
              repellendus aperiam, facere laborum nulla vel dignissimos velit
              facilis error? Dolorem magni temporibus nulla corrupti placeat
              nemo deleniti!ut sunt ullam quidem possimus officia beatae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus maxime libero earum reiciendis neque quam iure voluptatum, fuga culpa itaque? Maxime at ad repellendus et, possimus fugit. Molestiae, commodi ab.
            </p>

            <div className="dashicon" onClick={() => setPopup(false)}>
              <ImCross />
            </div>
          </div>
        )}
      </div>

      <div className="mob-header parent">
        <div className="menulogo" onClick={() => setmenudash(true)}>
          <IoMdMenu />
        </div>
        {menudash && (
          <div className="menu-option" onClick={() => setmenudash(false)}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Portfolio</Link>
            <div className="menuicon">
              <ImCross />
            </div>
          </div>
        )}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="dash" onClick={() => setMobdash(true)}>
          <MdDashboardCustomize />
        </div>
        {mobdash && (
          <div className="dash-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              esse commodi, culpa dicta placeat adipisci, est laboriosam
              mollitia in reprehenderit labore ullam molestias. Similique, iste
              nihil earum accusantium eligendi, minima ipsa nobis in obcaecati
              omnis culpa. Fugit repellat magni eos sequi consequatur doloremque
              praesentium temporibus vel, omnis voluptatibus veritatis nulla!
            </p>
            <div className="dashicon" onClick={() => setMobdash(false)}>
              <ImCross />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
