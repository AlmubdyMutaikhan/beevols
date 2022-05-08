import React, { useState } from "react";
import {FaFacebookF,FaInstagram, FaTelegramPlane} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import './Header.css';
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import Notification from "../Notification/Notification";
const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const { signoutUser } = useAuth();
    const [loggedOut, setLoggedOut] = useState(false);

    const handleSignOut = () => {
        signoutUser();
        setLoggedOut(true);
        setTimeout(() => {
            setLoggedOut(false);
        }, 4000);
    }

    return(
        <div className="header-container">
            <div className="header-logo-container">
                <h1>Bee Volunteers</h1>
            </div>
            <div className="header-data-container">
                <div className="header-social-medias">
                    <div className="social-media">
                        <FaFacebookF/>
                    </div>
                    <div className="social-media">
                        <FaInstagram/>
                    </div>
                    <div className="social-media">
                        <FaTelegramPlane/>
                    </div>
                </div>
                <div className="header-languages-container">
                    <select id="languages">
                        <option value="kz">KZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div className="header-user-container">
                        {user && <div className="volonter-be-btn" onClick={handleSignOut}>
                        <a className='auth-btn'>Шығу</a></div>}
                        {!user && <div className="volonter-be-btn">
                        <NavLink to="/auth" className='auth-btn'>Ерікті бол!</NavLink></div>}
                </div>
            </div>
            {loggedOut && <Notification title={'Шығу'} msg={'Сіз өз аккаунтыңыздан сәтті шықтыңыз'} bgColor={'green'}/>}
            
        </div>
    )
}

export default Header;