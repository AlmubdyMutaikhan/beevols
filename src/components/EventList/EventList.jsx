import { useEffect, useState, useContext } from 'react';
import CardEventGroup from '../Cards/CardEventGroup/CardEvent';

import './EventList.css';
import { LangContext } from "../../context/lang";

import getWord from "../../context/hf";
import useEvent from '../../hooks/useEvent';


const EventList = () => {
    

    const {getAll} = useEvent();
    const { lang, setLang } = useContext(LangContext);
    const [events, setEvents] = useState([]);
    const [updated, setUpdated] = useState(false);

    const load = async () => {
        try {
            const evs = await getAll();
            setEvents(evs);
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

    
    

    return(
        <div className="evlist-container">
            <h1>{getWord(words, lang, 'title')}</h1>
            
            <div className="evlist-card-container">
            {events.map((e, id) => {
              
                    return <CardEventGroup
                                    style={{
                                        height:'350px',
                                        width:'70%',
                                        display:'flex',
                                        marginTop:'50px',
                                        padding:'10px',
                                        border: '3px solid var(--first)'
                                    }}
                                    title={e.title}
                                    index={id+1}
                                    date={e.date}
                                    place={e.place}
                                    logo={'https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/books_book_glasses_reading-128.png'}
                                    desc={
                                        e.info
                                    }
                                    len={events.length}
                                    leader={false}
                                    link={'/'}
                                    bgImg={e.img}
                        />    
                })}
            </div>
          
        </div>
    )
}

export default EventList;