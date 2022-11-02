import { useEffect, useState, useContext } from 'react';
import CardEventGroup from '../Cards/CardEventGroup/CardEvent';

import './EventList.css';
import { LangContext } from "../../context/lang";

import getWord from "../../context/hf";
import useEvent from '../../hooks/useEvent';
import useAuth from '../../hooks/useAuth';
import Notification from '../Notification/Notification';


const EventList = () => {
    

    const {getAll} = useEvent();
    const { lang, setLang } = useContext(LangContext);
    const [events, setEvents] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [userID, setUserID] = useState('');
    const {isAuthenticated} = useAuth();
    const [not, setNot] = useState(false);
    const {regEvent} = useEvent();
    const load = async () => {
        try {
            const evs = await getAll();
            setEvents(evs);
            const user = await isAuthenticated();
            if(user && user.status){
                setUserID(user.payload.id);
            }

        } catch(err) {
            console.log(err);
        }
    }

    const register = (uId, eventId) => {
        regEvent(uId, eventId);
        setNot(true);

        setTimeout(() => {
            setNot(false);
        }, 1000);
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
       <> <div className="evlist-container">
            <h1>{getWord(words, lang, 'title')}</h1>
            
            <div className="evlist-card-container">
            {events.map((e, id) => {
              
                    return <CardEventGroup
                                    style={{
                                        height:'500px',
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
                                    onClick={()=>{
                                        register(userID, e._id);
                                    }}
                                    len={events.length}
                                    leader={false}
                                    link={'/'}
                                    bgImg={e.img}
                        />    
                })}
                
            </div>
         
        </div>

       {not && <Notification title={"Алақай!"}
          msg="Сіз сәтті түрде осы іс-шараға тіркелдіңіз! Алдағы уақытта топ басшысы сізбен хабарласады."
          bgColor={'green'}
          />}
        </>
    )
}

export default EventList;