import React, { useState, useContext } from "react";
import CardEvent from "../Cards/CardEvent/CardEvent";
import './EventCalendar.css';
import Notification from "../Notification/Notification";
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";
import { useEffect } from "react";
import useEvent from "../../hooks/useEvent";
import useAuth from "../../hooks/useAuth";
import useGroup from "../../hooks/useGroup";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import CardEventGroup from "../Cards/CardEventGroup/CardEvent";

const EventCalendarGroup = ({gId}) => {
   
    const {getEvents} = useEvent();
    const [events, setEvents] = useState([]);
    const {isAuthenticated} = useAuth();
    const {checkLeader} = useGroup();
    const [leader, setLeader] = useState(false);
    const [done, setDone] = useState(false);

    const check = async () => {
        const user = await isAuthenticated();
        if(user.status) {
            const {status} = await checkLeader(gId, user.payload.id);
            setLeader(status);
        }
    }


    const load = async () => {
        const events = await getEvents(gId);
        setEvents(events);
        console.log(events);
   }

   useEffect(() => {
    load();
    check();
   }, []);

  

 

    return(
        <div className="event-container">
        <div className="event-text">
            <h1>Іс-шаралар тізімі</h1>
            <img src="https://cdn4.iconfinder.com/data/icons/marketing-and-digital-marketing/32/web_clipboard-128.png" height="50" width="50"/>
        </div>
     <br/>
            <Carousel className="group-event-calendar">
            {events.map((e, id) => {
                    return <CardEventGroup
                                    style={{
                                        height:'400px',
                                        width:'100%',
                                        
                                    }}
                                    evId={e._id}
                                    gId={gId}
                                    len={events.length}
                                    title={e.title}
                                    index={id+1}
                                    date={e.date}
                                    place={e.place}
                                    logo={'https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/books_book_glasses_reading-128.png'}
                                    desc={
                                        e.info
                                    }
                                    setDone={setDone}
                                    leader={leader}
                                    link={'/'}
                                    bgImg={e.img}
                        />    
                })}
                
            </Carousel>
            {done && <Notification  title={'Хабарлама'}
                        msg={'Сіздің іс-шараңыз сәтті өшірілді'} bgColor={'green'}/>}
    </div>
    )

}

export default EventCalendarGroup;