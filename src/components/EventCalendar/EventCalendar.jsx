import React, { useState, useContext } from "react";
import CardEvent from "../Cards/CardEvent/CardEvent";
import './EventCalendar.css';
import Notification from "../Notification/Notification";
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";


const EventCalendar = () => {
    const [not, setNot] = useState('');
    const { lang, setLang } = useContext(LangContext);

    const showNot = () => {
        console.log('ok');
        setNot(true);
        setTimeout(() => {
            setNot(false);
        }, 3500)
    }

    const words = [
        {t:'Іс-шаралар тізімі',
        n1:'Буккроссинг',
        p1:'Қарағанды қаласы, ХББ НЗМ мектебі',
        d1:'ХББ НЗМ мектебінде жыл сайын өтетін кітап алмасу іс-шарасын өткізуге өз үлесіңді қос'
    },
    {t:'Список мероприятий',
    n1:'Буккроссинг',
    p1:'г. Караганда, школа НИШ ХБН',
    d1:'Примите участие в ежегодном мероприятии по обмену книгами в школе НИШ ХБН г.Караганда'
},
{t:'List of events',
n1:'Bookcrossing',
p1:'NIS CBD Karaganda city',
d1:'Contribute to the annual book exchange event at NIS CBD school'
},
    ]




    return(
        <div className="event-container">
        <div className="event-text">
            <h1>{getWord(words, lang, 't')}</h1>
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
                        title={getWord(words, lang, 'n1')}
                        index={1}
                        date={'20.11.22'}
                        place={getWord(words, lang, 'p1')}
                        logo={'https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/books_book_glasses_reading-128.png'}
                        desc={
                            getWord(words, lang, 'd1')
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
                        date={'25.11.22'}
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