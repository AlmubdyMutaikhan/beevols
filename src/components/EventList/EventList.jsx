import { useEffect, useState, useContext } from 'react';
import useAuth from '../../hooks/useAuth';

import './EventList.css';
import { LangContext } from "../../context/lang";

import getWord from "../../context/hf";


const EventList = () => {
    

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
            title:'Іс-шаралар тізімі',
            evName:'Іс-шара атауы',
            evPlace:'Өту орны',
            evDate:'Өту күні',
            evDesc:'Сипаттама'
        },
        {
            title:'Список мероприятий',
            evName:'Имя',
            evPlace:'Место',
            evDate:'Дата',
            evDesc:'Описание'
        },
        {
            title:'Events list',
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
        <div className="evlist-container">
            <h1>{getWord(words, lang, 'title')}</h1>
            
            <div className="evlist-card-container">
                <div className='evlist-item-container'>
                    <div className='evlist-img-con'>
                        <img src={'https://avatars.mds.yandex.net/i?id=2a00000179f3258682c38c06f07be3592202-4576184-images-thumbs&n=13'} alt='event img'/>
                    </div>
                    <div className='evlist-text-con'>
                        <h3>{getWord(words, lang, 'evName')}:</h3>
                        <h2>Event</h2>
                        <h3>{getWord(words, lang, 'evPlace')}:</h3>
                        <h2>Evebt</h2>
                        <h3>{getWord(words, lang, 'evDate')}:</h3>
                        <h2>Event</h2>
                        <h3>{getWord(words, lang, 'evDesc')}:</h3>
                        <p className='event-desc-l'>
                            Afjkvfhdkasl;dvbkaslfaaaaaaaaaaaaaaaaaaaa
                            kjskddskalfkjdslaldsajkfsakkdsa</p>
                        <p style={{
                            background:'var(--fifth)',
                            textAlign:'center',
                            color:'white',
                            fontFamily:'var(--montserrat)',
                            padding:'10px 20px',
                            borderRadius:'15px'
                        }}>Тіркелу</p>    
                    </div>
                    
                </div>
            </div>
          
        </div>
    )
}

export default EventList;