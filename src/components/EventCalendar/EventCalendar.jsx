import React, { useState } from "react";
import CardEvent from "../Cards/CardEvent/CardEvent";
import './EventCalendar.css';
import Notification from "../Notification/Notification";

const EventCalendar = () => {
    const [not, setNot] = useState('');

    const showNot = () => {
        console.log('ok');
        setNot(true);
        setTimeout(() => {
            setNot(false);
        }, 3500)
    }

    return(
        <div className="event-container">
        <div className="event-text">
            <h1>Іс-шаралар тізімі </h1>
            <img src="https://cdn4.iconfinder.com/data/icons/marketing-and-digital-marketing/32/web_clipboard-128.png" height="50" width="50"/>
        </div>
        
        <div className="event-slider-container">
            <div className="slides-container">
                <input type="radio" name="radio-btn" id="radio11"/>
                <input type="radio" name="radio-btn" id="radio12"/>
                <input type="radio" name="radio-btn" id="radio13"/>
                <input type="radio" name="radio-btn" id="radio14"/>
                
                <div className="slide first">
                    <CardEvent 
                        title={'Буккроссинг'}
                        index={1}
                        date={'25.04.22'}
                        place={'Қарағанды қаласы, ХББ НЗМ мектебі'}
                        logo={'https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/books_book_glasses_reading-128.png'}
                        desc={
                            `ХББ НЗМ мектебінде жыл сайын өтетін кітап алмасу іс-шарасын өткізуге өз үлесіңді қос`
                        }
                        
                        link={'/'}
                        onClick={showNot}
                        bgImg={`https://pbs.twimg.com/media/EKjQnXNWkAAOe7b.jpg`}
                    />
                </div>

                <div class="slide second">
                <CardEvent 
                        title={'9-мамыр - Жеңіс күні'}
                        index={2}
                        date={'09.05.22'}
                        place={'Жеңіс паркі'}
                        logo={'https://cdn4.iconfinder.com/data/icons/military-vol-2-1/4000/military_world_war_honor_medals-128.png'}
                        desc={
                            `9-мамыр күні Ұлы Отан соғысының ардегерлеріне көмектесуге шақырамыз`
                        }

                        link={'/'}
                        onClick={showNot}
                        bgImg={`https://gurk.kz/uploads/images/b5/67/87/b5467b871d96deeb06850086b5a42e86.jpg`}
                    />
                </div>
        
                <div class="slide third">
                <CardEvent 
                        title={'9-мамыр - Жеңіс күні'}
                        index={3}
                        date={'09.05.22'}
                        place={'Жеңіс паркі'}
                        logo={'https://cdn4.iconfinder.com/data/icons/military-vol-2-1/4000/military_world_war_honor_medals-128.png'}
                        desc={
                            `9-мамыр күні Ұлы Отан соғысының ардегерлеріне көмектесуге шақырамыз`
                        }

                        link={'/'}
                        onClick={showNot}
                        bgImg={`http://sc0006.zerenda.aqmoedu.kz/arc/attach/667/249595/img4680.jpg`}
                    />
                </div>
        
                <div class="slide fourth">
                <CardEvent 
                        title={'9-мамыр - Жеңіс күні'}
                        index={4}
                        date={'09.05.22'}
                        place={'Жеңіс паркі'}
                        logo={'https://cdn4.iconfinder.com/data/icons/military-vol-2-1/4000/military_world_war_honor_medals-128.png'}
                        desc={
                            `9-мамыр күні Ұлы Отан соғысының ардегерлеріне көмектесуге шақырамыз`
                        }

                        link={'/'}
                        onClick={showNot}
                        bgImg={`http://sc0006.zerenda.aqmoedu.kz/arc/attach/667/249595/img4680.jpg`}
                    />
                </div>

                <div className="navigation">
                    <label for="radio11" className="manual-btn"></label>
                    <label for="radio12" className="manual-btn"></label>
                    <label for="radio13" className="manual-btn"></label>
                    <label for="radio14" className="manual-btn"></label>
                </div>
            </div>
        </div>
        {not && <Notification  title={'Іс-шара'} msg={'Сіз іс-шараға сәтті тіркелдіңіз, алдағы уақытта біздің хабарландыруларымызды күтіңіз'} bgColor={'green'}/>}
    </div>
    )

}

export default EventCalendar;