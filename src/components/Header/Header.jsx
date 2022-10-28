import React, { useEffect, useState } from "react";
import {FaFacebookF,FaInstagram, FaTelegramPlane} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import './Header.css';
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import Notification from "../Notification/Notification";
import { LangContext } from "../../context/lang";

import getWord from "../../context/hf";


const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const { signoutUser } = useAuth();
    const [loggedOut, setLoggedOut] = useState(false);
    const { lang, setLang } = useContext(LangContext);
    const handleSignOut = () => {

        signoutUser();
        setLoggedOut(true);
        setTimeout(() => {
            setLoggedOut(false);
        }, 4000);
    }


    const [words, setWords] = useState([{
        be:"Ерікті бол",
                logout:"Шығу",
                msg:'Сіз өз аккаунтыңыздан сәтті шықтыңыз'
            },
            {be:"Стань волонтером",
                logout:"Выйти",
                msg:'Вы вышли из своей учетной записи'
            },
            {be:"Be a volunteer",
                logout:"Log out",
                msg:'You logged out your account'
            }
    ])

    

    return(
        <div className="header-container">
                   
            <div className="header-logo-container">
                <h1>
                    <NavLink to='/'>
                        Bee Volunteers
                        </NavLink>    
                    </h1>
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
                    <select id="languages" onChange={(e) => {
                        setLang(e.target.value);
                    }}>
                        <option value="kz">KZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
              
                <div className="header-user-container">
                        {user && <div className="bpoints">
                                    <p>Bpoints: <span>{user.payload.user.bpoints}</span></p>
                                </div>
                        }
                </div>
                <div className="header-user-container">
                        {user && <div className="volonter-be-btn" onClick={handleSignOut}>
                        <a className='auth-btn'>{getWord(words, lang, 'logout')}</a></div>}
                        {!user && <div className="volonter-be-btn">
                        <NavLink to="/auth" className='auth-btn'>{getWord(words, lang, 'be')}</NavLink></div>}
                </div>
            </div>
            {loggedOut && <Notification title={getWord(words, lang, 'logout')}
             msg={getWord(words, lang, 'msg')} bgColor={'green'}/>}
            
        </div>
    )
}

export default Header;