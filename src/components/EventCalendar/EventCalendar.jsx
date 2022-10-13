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
                        date={'20.10.22'}
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
                        title={'IT бағдарламасын оқыту'}
                        index={4}
                        date={'25.10.22'}
                        place={'Балалар сарайы-2'}
                        logo={'https://cdn1.iconfinder.com/data/icons/luchesa-2/128/Computer-64.png'}
                        desc={
                            `8-14 жас аралығындағы балаларға IT курстарынан шеберлік оқытулар жүргізу`
                        }

                        link={'/'}
                        onClick={showNot}
                        bgImg={`https://www.gov.kz/uploads/2022/9/16/794b9469d29ad64e2f4d362b6add2b26_original.48189.jpg`}
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
        {not && <Notification  title={'Іс-шара'} msg={`
        Іс-шараға қатысу үшін сіз ең алдымен порталға тіркелуіңіз немесе кіруіңіз қажет. Порталға тіркелу үшін ерікті болу тетігін басыңыз`} 
        bgColor={'odd'}/>}
    </div>
    )

}

export default EventCalendar;