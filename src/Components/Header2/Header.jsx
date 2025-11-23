
import { Link } from 'react-router-dom'
import { MdDashboardCustomize } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logo.png"
import "./header.scss"
import { useState } from 'react';
const Header = () => {
    const [popup, setPopup] = useState(false);
    const [popup2, setPopup2] = useState(false);
    const [popup3, setPopup3] = useState(false);

    return (
        <>
            <div className="header-parent parent">
                <div className="header-logo">
                    <Link className="logo">
                        <img src={logo} alt='Sunil' />
                    </Link>
                </div>
                <div className="menu-list">

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>

                </div>
                <div className="toggel" onClick={() => setPopup(true)}>
                    <MdDashboardCustomize />
                </div>

                {popup && (
                    <div className="popup-1">

                        <div className="popup-menu">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis esse delectus hic ad libero quo fuga voluptatem optio ipsum mollitia velit nesciunt maxime enim, corporis quis consectetur illum similique, labore ut exercitationem suscipit itaque. Ad fuga nemo doloremque rerum,</p>

                            <div className="close" onClick={() => setPopup(false)}><IoCloseSharp /></div>
                        </div>
                    </div>
                )}





            </div>


            <div className="header-parent1 parent">
                {/* //-----------Mobile Menu-----------------// */}
                <div className="mobile-menu" onClick={() => setPopup2(true)}><RiMenuLine /></div>
                <div className="header-logo">
                    <Link className="logo">
                        <img src={logo} alt='Sunil' />
                    </Link>
                </div>
                <div className="toggel" onClick={() => setPopup3(true)}>
                    <MdDashboardCustomize />
                </div>

                {popup2 && (
                    <>
                        <div className="popup-2">
                            <div className="popup-menu2">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam obcaecati maxime distinctio, voluptas exercitationem magnam ipsa ut laudantium! Tempore, culpa.</p>
                                <div className="close" onClick={() => setPopup2(false)}>
                                    <IoCloseSharp />
                                </div>
                            </div>

                        </div>

                    </>
                )}
                {popup3 && (
                    <>
                        <div className="popup-3">
                            <div className="popup-menu3">

                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="close" onClick={() => setPopup3(false)}>
                                    <IoCloseSharp />
                                </div>
                            </div>


                        </div>

                    </>
                )}
            </div>
        </>
    )
}

export default Header
