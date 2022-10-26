import React, {useState, useContext} from "react";
import CardColored from "../Cards/CardColored/CardColored";
import './Info.css';
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";


const Info = () => {
    const { lang, setLang } = useContext(LangContext);
    const [words, setWords] = useState([{
        h1:'Ерікті болу картасы',
        p1:'Ерікті болудың қыр-сырымен танысыңыз...',
        h2:'Іс-шаралар',
        p2:'Алдағы болатын іс-шаралардан хабардар болыңыз',
        act:'Белсенді жобалар',
        act1:'Балаларға IT курстарын оқыту',
        act2:'Khan academy курстарын аудару',
        act3:'Шетел тілдерін оқытуға көмектесу',
    },
    {
        h1:'Волонтерская карта',
        p1:'Узнать о волонтерстве...',
        h2:'Мероприятия',
        p2:'Следите за предстоящими событиями',
        act:'Активные проекты',
        act1:'Преподавание IT-курсов детям',
        act2:'Перевод курсов Академии Хана',
        act3:'Преподавание иностранных языков',
    },
    {
        h1:'Volunteer card',
        p1:'Learn about volunteering...',
        h2:'Activities',
        p2:'Stay tuned for upcoming events',
        act:'Active projects',
        act1:'Teaching IT courses to children',
        act2:'Translation of Khan academy courses',
        act3:'Helping to teach foreign languages',
    },



]);

    return(
        <div className="info-container">
            <div className="rsrcs-container">
                <div className="card-colored-container" style={{backgroundColor: 'var(--first)' }}>
                    <h1>{getWord(words, lang, 'h1')}</h1>
                    <p>{getWord(words, lang, 'p1')}</p>
                    <div className="img-card">
                    <img    src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Map-128.png"
                          
                            />
                    </div>
                    
                </div>

                <div className="card-colored-container">
                    <h1>{getWord(words, lang, 'h2')}</h1>
                    <p>{getWord(words, lang, 'p2')}</p>
                    
                    <div className="img-card">
                    <img    src="https://cdn3.iconfinder.com/data/icons/bowling-alley-and-arcade-indigo-vol-2/256/Weekly_Events-128.png"
                          
                            />
                    </div>

                </div>
            </div>
            <div className="hot-news-container">
                <div className="hot-news-text">
                    <h2>{getWord(words, lang, 'act')}</h2>
                    <img src="https://cdn3.iconfinder.com/data/icons/unigrid-phantom-vehicles-vol-3/60/001_130_rocket_launch_start_space_ship_cosmos_transport_exploration-128.png"/>
                </div>
                <div className="hot-news-item">
                    <p className="news-title">{getWord(words, lang, 'act1')}</p>
                    <p>10.10.22</p>
                </div>
                <div className="hot-news-item">
                    <p className="news-title">{getWord(words, lang, 'act2')}</p>
                    <p>28.09.22</p>
                </div>
                <div className="hot-news-item">
                    <p className="news-title">{getWord(words, lang, 'act3')}</p>
                    <p>15.09.22</p>
                </div>
            </div>
        </div>
    )
}

export default Info;