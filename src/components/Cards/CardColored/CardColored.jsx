import React, {useContext, useState} from "react";
import './CardColored.css';
import { NavLink } from "react-router-dom";
import { LangContext } from "../../../context/lang";
import getWord from "../../../context/hf";

const CardColored = ({ title, desc, style, bgImg, index, link, intro, logo }) => {
    const [words, setWords] = useState([
        {more:'Толығырақ'},
        {more:'Подробнее'},
        {more:'Read more'},
    ])
    const { lang, setLang } = useContext(LangContext);

    return(
        <div className="slide-content-container" style={style}>
                        <div className="slide-content-text">
                            <div className="slide-content-index">
                                <h1><span>{index}/</span>4</h1>
                            </div>
                            <div className="slide-content-title">
                                <h1>{title}</h1>
                                <img className="slide-content-img" src={logo}/>
                            </div>
                            <div className="slide-content-p">
                                <p>
                                    {desc}
                                </p>
                            </div>
                            <div className="slide-content-btn">
                                <NavLink to={link}>
                                    {getWord(words, lang, 'more')}
                                </NavLink>
                            </div>
                        </div>
                        <div className="slide-content-image" style={{background:`url(${bgImg})`, backgroundPosition:'center', backgroundSize:'cover'}}>
                            <div className="slide-content-intro-text">
                                <p>
                                {intro}
                                </p>
                            </div>
                        </div>
                    </div>
    )
}


export default CardColored;