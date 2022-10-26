import React, {useContext} from "react";
import './Directions.css';
import {FcHome} from 'react-icons/fa';
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";


const Directions = () => {
    const { lang, setLang } = useContext(LangContext);
    const words = [{
        t:'Ерікті бағыттары',
        a1:"Медицина",
        a2:"Әлеумет",
        a3:"Оқу",
        a4:"Ғылым",
        a5:"Спорт",
        a6:"Өнер",
        a7:"Балаларға көмектесу",
        a8:"Қарттарға көмектесу",
        a9:"Мектеп іс-шаралары",
    },
    {
        t:'Направления',
        a1:"Медицина",
        a2:"Общество",
        a3:"Обучение",
        a4:"Наука",
        a5:"Спорт",
        a6:"Искусство",
        a7:"Помощь детям",
        a8:"Помощь пожилым людям",
        a9:"Школьные мероприятия",
    },
    {
        t:'Volunteering prospects',
        a1:"Medicine",
        a2:"Society",
        a3:"Education",
        a4:"Science",
        a5:"Sport",
        a6:"Art",
        a7:"Help for kid",
        a8:"Help for olders",
        a9:"School activities",
    },
    
]

    const directions = [
        getWord(words, lang, 'a1'),
        getWord(words, lang, 'a2'),
        getWord(words, lang, 'a3'),
        getWord(words, lang, 'a4'),
        getWord(words, lang, 'a5'),
        getWord(words, lang, 'a6'),
        getWord(words, lang, 'a7'),
        getWord(words, lang, 'a8'),
        getWord(words, lang, 'a9'),
        
    ]
    return(
        <div className="directions-container">
            <div className="direction-text">
                <h1>{getWord(words, lang, 't')}</h1>
                <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Direction-128.png" height="42" width="42"/>
            </div>
            
            
            <div className="directions-items">
                {directions.map((i, k) => (
                        <div className="direction-item" key={k}>
                            <p> {i} </p>
                        </div>
                ))}
            </div>
            
        </div>
    )
}

export default Directions;