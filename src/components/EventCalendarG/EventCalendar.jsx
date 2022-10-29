import React, { useState, useContext } from "react";
import CardEvent from "../Cards/CardEvent/CardEvent";
import './EventCalendar.css';
import Notification from "../Notification/Notification";
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";
import { useEffect } from "react";
import useEvent from "../../hooks/useEvent";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import CardEventGroup from "../Cards/CardEventGroup/CardEvent";

const EventCalendarGroup = ({gId}) => {
   
    const {getEvents} = useEvent();
    const [events, setEvents] = useState([]);

    const load = async () => {
        const events = await getEvents(gId);
        setEvents(events);
        console.log(events);
   }

   useEffect(() => {
    load();
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
                                        height:'100%',
                                        width:'100%'
                                    }}
                                    title={e.title}
                                    index={id+1}
                                    date={e.date}
                                    place={e.place}
                                    logo={'https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/books_book_glasses_reading-128.png'}
                                    desc={
                                        e.info
                                    }
                                    
                                    link={'/'}
                                    bgImg={e.img}
                        />    
                })}
            </Carousel>
        
    </div>
    )

}

export default EventCalendarGroup;