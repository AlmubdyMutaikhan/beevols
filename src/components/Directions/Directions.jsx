import React from "react";
import './Directions.css';
import {FcHome} from 'react-icons/fa';

const Directions = () => {
    const directions = [
        'Медицина',
        'Әлеумет',
        'Оқу',
        'Ғылым',
        'Спорт',
        'Өнер',
        'Балаларға көмектесу',
        'Қарттарға көмектесу',
        'Мектеп іс-шаралары'
    ]
    return(
        <div className="directions-container">
            <div className="direction-text">
                <h1>Ерікті бағыттары</h1>
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