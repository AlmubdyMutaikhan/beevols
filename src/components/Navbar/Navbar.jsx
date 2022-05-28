import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [isVisibleNavbar, setVisible] = useState(false);

    const toggleMenu = () => {
        const navbar = document.getElementById('navbar-items-container');
        if(!isVisibleNavbar) {
            navbar.style.transform = "translateX(0)";
            navbar.style.display = "block";
            setVisible(true);
        } else {
            setVisible(false);
            navbar.style.display = "none";
        }
    }

    return(
        <div className="navbar-container">
     
            <div id="navbar-items-container">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            Бас мәзір
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/news">
                            Жаңалықтар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/groups">
                            Топтар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Іс-шаралар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Есеп
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Біз туралы
                        </NavLink>
                    </li>
                </ul>
            </div>
            <i className="fad fa-hamburger" id="navbar-mobile-menu" onClick={toggleMenu}></i>
         
        </div>
    )
}

export default Navbar;