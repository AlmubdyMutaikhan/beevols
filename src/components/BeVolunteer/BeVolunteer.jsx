import React from "react";
import { NavLink } from "react-router-dom";
import './BeVolunteer.css';

const BeVolunteer = () => {
    return(
        <div className="offers-container">
            <div className="offer-container">
                <div className="offer-text">
                    <h2>Ерікті болғың келе ме?</h2>
                    <p>Адамдарға қол ұшын созу, көмектесу және шаттану</p>
                    <div className="offer-btn">
                        <NavLink to="/auth">
                            Ерікті болу
                        </NavLink>
                    </div>
                </div>
                <div className="offfer-image">
                    <img src="https://cdn0.iconfinder.com/data/icons/resume-uniform-grid-32px/32/volunteering-hand-volunteer-participation-128.png"/>
                </div>
            </div>
            <div className="offer-container">
                <div className="offer-text">
                    <h2>Еріктілерді іздейсіз бе?</h2>
                    <p>Егер де жаңа іс-бастап, ерікті достар іздеймін десеңіз</p>
                    <div className="offer-btn" style={{border: '2px solid var(--second)'}}>
                        <NavLink to="/groups">
                            Еріктілерді іздеу
                        </NavLink>
                    </div>
                </div>
                <div className="offfer-image">
                    <img src="https://cdn3.iconfinder.com/data/icons/start-up-4/44/search-128.png"/>
                </div>
            </div>
        </div>
    )
}

export default BeVolunteer;