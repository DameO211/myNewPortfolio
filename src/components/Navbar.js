import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const menuItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Projects", path: "/projects" },
        { id: 4, name: "Contact", path: "/contact" },
    ];

    return (

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>


                    <ul className={showMenu ? "nav-links show-nav" : "nav-links"}>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <a href={item.path}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="burger-menu" onClick={toggleMenu}>
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </div>
                </div>

            </nav>



    );
};

export default Navbar;
