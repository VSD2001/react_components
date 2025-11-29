import React from "react";
import { Link } from "react-router-dom";
import "./web.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { FaCamera, FaMicrophone, FaPlus } from "react-icons/fa";

const Web = () => {
  return (
    <>
      <div className="header-parent parent">
        <div className="header-cont cont">
          <div className="menu">
            <Link to="/">Menu</Link>
            <Link to="/about">Home</Link>
            <Link to="/services">Image</Link>
            <Link to="/contact">Save</Link>
            <Link to="/blog">About</Link>
            <Link to="/careers">Account</Link>
            <Link to="#">
              <GiHamburgerMenu />
            </Link>
          </div>
          <div className="pi">
            <IoMdPerson />
            <div className="info">
              <p>Varad Deshpande</p>
              <p>Fullstack Develover</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-parent parent">
        <div className="hero-cont cont">
          <div className="top">
                <div className="left">
            <div className="search">
              <div className="text">
                <p>Search...........</p>
              </div>
              <div className="sicon">
                <FaMicrophone />
                <FaCamera />
              </div>
            </div>
            <div className="cornerbox">
              <div className="innercorner">
                <FaPlus />
              </div>
             
            </div>
          </div>
          <div className="right">
            <p>COLLABORATION</p>
          </div>

          </div>
          {/* <div className="middle">
            <div className="left">
              <p>MEGENAL APAITU ANTARIKSHA / LUARkjafhgagjahkajgnakjgljagjl</p>
            </div>
            <div className="right">
              <button>Get Started</button>

            </div>
            
          </div>
          <div className="bottom">
            <div className="left">
              <h1>ARTAISHA</h1>
            </div>
            <div className="right">
              <h1>What is Antariksha??</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid labore quibusdam accusamus dicta corporis aliquam eaque atque veritatis minima!</p>
            </div>
            
          </div> */}
      
           
        </div>
      </div>
    </>
  );
};
export default Web;
