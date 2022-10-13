import React from "react";
import './CardColored.css';
import { NavLink } from "react-router-dom";

const CardColored = ({ title, desc, style, bgImg, index, link, intro, logo }) => {
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
                                    Толығырақ
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