import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import './BeVolunteer.css';
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";

const BeVolunteer = () => {
    const { lang, setLang } = useContext(LangContext);
    const [words, setWords] = useState([
        {q1:'Ерікті болғың келе ме?',
        p1:'Адамдарға қол ұшын созу, көмектесу және шаттану',
        b1:'Ерікті болу',
        q2:'Еріктілерді іздейсіз бе?',
        p2:'Егер де жаңа іс-бастап, ерікті достар іздеймін десеңіз',
        b2:'Еріктілерді іздеу',
    },
    {q1:'Хотите стать волонтером?',
    p1:'Общаться, помогать и подбадривать людей',
    b1:'Быть волонтером',
    q2:'Ищете волонтеров?',
    p2:'Если вы хотите начать новый бизнес и ищете друзей-добровольцев',
    b2:'Искать волонтеров',
},
{q1:'Want to volunteer?',
        p1:'Reaching out, helping and cheering people up',
        b1:'Be a volunteer',
        q2:'Looking for volunteers?',
        p2:'If you want to start a new business and look for volunteer friends',
        b2:'Look for volunteers',
    },

    ])
    return(
        <div className="offers-container">
            <div className="offer-container">
                <div className="offer-text">
                    <h2>{getWord(words, lang, 'q1')}</h2>
                    <p>{getWord(words, lang, 'p1')}</p>
                    <div className="offer-btn">
                        <NavLink to="/auth">
                        {getWord(words, lang, 'b1')}
                        </NavLink>
                    </div>
                </div>
                <div className="offfer-image">
                    <img src="https://cdn0.iconfinder.com/data/icons/resume-uniform-grid-32px/32/volunteering-hand-volunteer-participation-128.png"/>
                </div>
            </div>
            <div className="offer-container">
                <div className="offer-text">
                    <h2>{getWord(words, lang, 'q2')}</h2>
                    <p>{getWord(words, lang, 'p2')}</p>
                    <div className="offer-btn" style={{border: '2px solid var(--second)'}}>
                        <NavLink to="/groups">
                        {getWord(words, lang, 'b2')}
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