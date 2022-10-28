import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { LangContext } from "../../context/lang";

import getWord from "../../context/hf";


const Navbar = () => {
    const [isVisibleNavbar, setVisible] = useState(false);
    const { lang, setLang } = useContext(LangContext);

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

    const [words, setWords] = useState([{
        home:"Бас мәзір",
        news:"Жаңалықтар",
        groups:"Топтар",
        events:"Іс-шаралар",
        report:"Есеп",
        about:"Біз туралы"
    },
    {
        home:"Главная",
        news:"Новости",
        groups:"Группы",
        events:"Мероприятия",
        report:"Отчеты",
        about:"О нас"
    },
    {
        home:"Home",
        news:"News",
        groups:"Groups",
        events:"Events",
        report:"Reports",
        about:"About us"
    }
])


    return(
        <div className="navbar-container">
     
            <div id="navbar-items-container">
                <ul>
                    <li>
                        <NavLink exact to="/">
                       
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/news">
                            {getWord(words, lang, 'home')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/groups">
                        {getWord(words, lang, 'groups')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/events">
                        {getWord(words, lang, 'events')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                        {getWord(words, lang, 'report')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                        {getWord(words, lang, 'about')}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <i className="fad fa-hamburger" id="navbar-mobile-menu" onClick={toggleMenu}></i>
         
        </div>
    )
}

export default Navbar;