import React from "react";
import { NavLink } from "react-router-dom";
import CardColored from "../Cards/CardColored/CardColored";
import './Slider.css';

const Gallery = () => {
    return(
        <div className="slider-container">
            <div className="slides-container">
                <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/>
                
                <div className="slide first">
                <CardColored 
                            title={'Қош келдің, ерікті!'}
                            desc={`
                            Ерікті болу ерлікпен тең, өз Қарағанды өңіріңді дамытуға үлес қосуыңа әрқашан көмектесеміз. Және де
                            сол мақсатты орындауда біздің жаңа веб-сайтымызды қарсы ал!
                            `}
                            index={1}
                            logo={'https://cdn4.iconfinder.com/data/icons/new-year-color-line/64/15-confetti-128.png'}
                            link={'/auth'}
                            intro={`
                            Өз еркімен қоғамға пайдасын тигізуді көздейтін еріктілердің қатары жыл санап артып келеді. Бүгінде әлем халқының 970 миллионы волонтер болса, оның ішінде әрбір сегізінші қазақстандық еріктілер қатарын толықтыруда`}
                            bgImg={'https://baigenews.kz/upload/storage/ee/eebd7680145e4ce0de1735fb8a7f6033.JPG'}
                    />
                </div>

                <div class="slide second">
                    <CardColored 
                            title={'Жаңа мүмкіндіктер!'}
                            desc={`
                              Біздің bee-volunteers.com веб-сайтымыз, сіздер үшін жаңа функционалдармен толықтырылды, ендігі 
                              сәтте сіз өз ерікті тобыңызды осы платформада көркейте аласыз
                            `}
                            bgImg={'https://ehonews.kz/wp-content/uploads/2021/06/photo_301648.jpg'}
                        
                            index={2}
                            logo={'https://cdn4.iconfinder.com/data/icons/creative-process-53/64/insight-intelligence-creative-solutions-opportunity-256.png'}
                            link={'/auth'}
                            intro={`
                            Ерікті іс шаралары, топтың белсенді жұмыс істеуі мен әлеуметтік даму ендігі біздің веб-платформа арқылы оңайлана түседі.`}
                    />
                </div>
        
                <div class="slide third">
                <CardColored 
                            index={3}
                            title={'Еріктілер іске кірісті'}
                            desc={`
                               Ерікті топтары біздің платформаға тіркелу арқылы қазіргі таңда қызу жұмыс жасап, Қарағанды өңірінің волонтерлік қызмет саласын әрі қарай дамытып жатыр
                            `}
                            bgImg={'https://arnapress.kz/storage/articles/converted/117600.jpg'}
                            logo={'https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/COLLABORATE-256.png'}
                            link={'/auth'}
                            intro={`
                            Өз еркімен қоғамға пайдасын тигізуді көздейтін еріктілердің қатары жыл санап артып келеді.  Ерікті топтары біздің платформаға тіркелу арқылы қазіргі таңда қызу жұмыс жасап, Қарағанды өңірінің волонтерлік қызмет саласын әрі қарай дамытып жатыр`}
                    />
                </div>
        
                <div class="slide fourth">
                <CardColored 
                            index={4}
                            title={'Қош келдің, ерікті!'}
                            desc={`
                                Ерікті болу ерлікпен тең, өз Қарағанды өңіріңді дамытуға үлес қосуыңа әрқашан көмектесеміз
                            `}
                            logo={'https://cdn4.iconfinder.com/data/icons/new-year-color-line/64/15-confetti-128.png'}
                            link={'/auth'}
                            bgImg={`https://rus.azattyq-ruhy.kz/cache/imagine/main_page_full/uploads/news/2020/02/12/5e43bc9a6f79e673098969.jpg`}
                            intro={`
                            Өз еркімен қоғамға пайдасын тигізуді көздейтін еріктілердің қатары жыл санап артып келеді. Бүгінде әлем халқының 970 миллионы волонтер болса, оның ішінде әрбір сегізінші қазақстандық еріктілер қатарын толықтыруда`}
                    />
                </div>

                <div className="navigation">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                    <label for="radio4" className="manual-btn"></label>
                </div>
            </div>
        </div>
    )
}

export default Gallery;