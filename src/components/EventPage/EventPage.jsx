import { useEffect, useState, useContext } from 'react';
import useAuth from '../../hooks/useAuth';

import './Eventpage.css';
import { LangContext } from "../../context/lang";

import getWord from "../../context/hf";


const Eventpage = () => {
    const {isAuthenticated} = useAuth();
    const { lang, setLang } = useContext(LangContext);

    const [updated, setUpdated] = useState(false);

    const load = async () => {
        try {
            const user = await isAuthenticated();
           // console.log(nots.notifications); 
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        load();
    }, []);


    const words = [
        {
            title:'Іс-шараға тіркелу формасы',
            evName:'Іс-шара атауы',
            evPlace:'Өту орны',
            evDate:'Өту күні',
            evDesc:'Сипаттама'
        },
        {
            title:'Форма для регистрации мероприятий',
            evName:'Имя',
            evPlace:'Место',
            evDate:'Дата',
            evDesc:'Описание'
        },
        {
            title:'Event registration form',
            evName:'Event name',
            evPlace:'Event place',
            evDate:'Event date',
            evDesc:'Description'
        },
    ]

    const events = [
        {
            title:'',

        }
    ]
    return(
        <div className="evpage-container">
            <h1>{getWord(words, lang, 'title')}</h1>            
            <div className="evpage-card-container">
                
            </div>
          
        </div>
    )
}

export default Eventpage;