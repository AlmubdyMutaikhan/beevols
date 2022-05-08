import React from "react";

import Gallery from '../components/Slider/Slider';
import Info from '../components/Info/Info';
import Choices from '../components/Choices/Choices';
import BeVolunteer from '../components/BeVolunteer/BeVolunteer';
import Directions from '../components/Directions/Directions';
import EventCalendar from '../components/EventCalendar/EventCalendar';
import Footer from '../components/Footer/Footer';
import WannaBe from '../components/WannaBeVolonteer/WannaBeVolonteer';

const Index = () => {
    return(
        <>
            <Gallery/>
            <Info/>
            <Choices/>
            <BeVolunteer/>
            <Directions/>
            <EventCalendar/>
            <br/>
            <br/>
            <br/>

            <WannaBe/>
            <Footer/>
        </>
    )
}

export default Index;