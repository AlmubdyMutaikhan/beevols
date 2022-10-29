import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../../context/lang";
import getWord from "../../../context/hf";
import './CardEvent.css';

const CardEventGroup = ({title, desc, style, date, place, bgImg, index, link, intro, logo, onClick}) => {
    
    const { lang, setLang } = useContext(LangContext);
    const words = [{
        d:'Өткізілу күні:',
        p:'Өту орны: ',
        r:' Тіркелу'
    },
    {
        d:'Дата:',
        p:'Место проведения:',
        r:'Зарегистрироваться'
    },
    {
        d:'Date:',
        p:'Place: ',
        r:'Register'
    },


]
    return(
        <div className="egslide-container"
       >
                <div className="egslide-content-image"
                        style={{background:`url('${bgImg}')`,
                        backgroundPosition:'center',
                        backgroundSize:'cover'}}>
                            
                        </div>
                        <div className="egslide-content-text">
                            <div className="slide-content-index">
                                <h1><span>{index}/</span>4</h1>
                            </div>
                            <div className="slide-content-title">
                                <h2>{title}</h2>
                            </div>
                            <div className="slide-content-p">
                                <p>
                                   {desc}
                                </p>
                            </div>
                            <div className="slide-content-event">
                                <h3> {getWord(words, lang, 'd')} {date}</h3>
                                <h3> {getWord(words, lang, 'p')}{place}</h3>
                            </div>
                            <div className="slide-content-btn">
                                <p onClick={onClick}>
                                {getWord(words, lang, 'r')}
                                </p>
                            </div>
                        </div>
                        
                    </div>
    )
}


export default CardEventGroup;