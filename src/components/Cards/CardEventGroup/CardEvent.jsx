import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../../context/lang";
import getWord from "../../../context/hf";
import './CardEvent.css';
import useAuth from "../../../hooks/useAuth";
import useGroup from "../../../hooks/useGroup";
import { useEffect } from "react";
import useEvent from "../../../hooks/useEvent";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import Notification from "../../Notification/Notification";
const CardEventGroup = ({title, evId, gId, setDone, leader, desc, len, style, date, place, bgImg, index, link, intro, logo, onClick}) => {
    const [loading, setLoading] = useState(false);
    const [msg, setMessage] = useState('');


    const { lang, setLang } = useContext(LangContext);
    const words = [{
        d:'Өткізілу күні:',
        p:'Өту орны: ',
        r:' Тіркелу',
        del:'Өшіру'
    },
    {
        d:'Дата:',
        p:'Место проведения:',
        r:'Зарегистрироваться',
        del:'Удалить'
    },
    {
        d:'Date:',
        p:'Place: ',
        r:'Register',
        del:'Delete'
    },


]
    const {deleteEvent} = useEvent(setLoading, setMessage);

    const deleteEv = async () => {
        await deleteEvent(gId, evId);
        setDone(true);
        setTimeout(() => {
            setDone(false);
            window.location.reload();
        }, 3000);
    }
   
    

    return(
        <div className="egslide-container"
        style={style}
       >
                <div className="egslide-content-image"
                        style={{background:`url('${bgImg}')`,
                        backgroundPosition:'center',
                        backgroundSize:'cover'}}>
                            
                        </div>
                        <div className="egslide-content-text">
                            <div className="slide-content-index">
                                <h1><span>{index}/</span>{len}</h1>
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
                          
                            {leader ? 
                            <div className="slide-content-btn">
                                <p onClick={deleteEv}>
                                {getWord(words, lang, 'del')}
                                </p>
                                {loading && <Loading/>}
                            </div> :   <div className="slide-content-btn">
                                <p onClick={onClick}>
                                {getWord(words, lang, 'r')}
                                </p>
                            </div>
                            }
                        </div>
                    
                    </div>
    )
}


export default CardEventGroup;