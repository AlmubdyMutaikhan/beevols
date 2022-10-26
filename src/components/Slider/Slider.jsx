import React, {useContext} from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CardColored from "../Cards/CardColored/CardColored";
import './Slider.css';
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";
const Gallery = () => {
    const { lang, setLang } = useContext(LangContext);

    const [words, setWords] = useState([{
            s1t:"Қош келдің, ерікті!",
            s1d:`Ерікті болу ерлікпен тең, өз Қарағанды өңіріңді дамытуға үлес қосуыңа әрқашан көмектесеміз. Және де
            сол мақсатты орындауда біздің жаңа веб-сайтымызды қарсы ал!`,
            s1i:`  Өз еркімен қоғамға пайдасын тигізуді көздейтін еріктілердің қатары жыл санап артып келеді. Бүгінде әлем халқының 970 миллионы волонтер болса, оның ішінде әрбір сегізінші қазақстандық еріктілер қатарын толықтыруда`,
            
            s2t:"Жаңа мүмкіндіктер!",
            s2d:`Біздің bee-volunteers.com веб-сайтымыз, сіздер үшін жаңа функционалдармен толықтырылды, ендігі 
            сәтте сіз өз ерікті тобыңызды осы платформада көркейте аласыз`,
            s2i:` Ерікті іс шаралары, топтың белсенді жұмыс істеуі мен әлеуметтік даму ендігі біздің веб-платформа арқылы оңайлана түседі.`,

            s3t:"Еріктілер іске кірісті",
            s3d:`Ерікті топтары біздің платформаға тіркелу арқылы қазіргі таңда қызу жұмыс жасап, Қарағанды өңірінің волонтерлік қызмет саласын әрі қарай дамытып жатыр`,
            s3i:`Өз еркімен қоғамға пайдасын тигізуді көздейтін еріктілердің қатары жыл санап артып келеді.  Ерікті топтары біздің платформаға тіркелу арқылы қазіргі таңда қызу жұмыс жасап, Қарағанды өңірінің волонтерлік қызмет саласын әрі қарай дамытып жатыр`,

            s4t:"Біздің порталға тіркел, ерікті!",
            s4d:`Ерікті болу ерлікпен тең, өз Қарағанды өңіріңді дамытуға үлес қосуыңа әрқашан көмектесеміз. Және де
            сол мақсатты орындауда біздің жаңа веб-сайтымызды қарсы ал!`,
            s4i:`  Өз еркімен қоғамға пайдасын тигізуді көздейтін еріктілердің қатары жыл санап артып келеді. Бүгінде әлем халқының 970 миллионы волонтер болса, оның ішінде әрбір сегізінші қазақстандық еріктілер қатарын толықтыруда`,
        },
        {
            s1t:"Добро пожаловать, волонтер!",
            s1d:`Волонтерство равно отваге, мы всегда поможем вам внести свой вклад в развитие вашей Карагандинской области. А также
            Встречайте наш новый веб-сайт для достижения этой цели!`,
            s1i:`Количество добровольцев, желающих принести пользу обществу, увеличивается с каждым годом. На сегодняшний день 970 миллионов населения планеты являются волонтерами, в том числе каждый восьмой казахстанский волонтер`,
            
            s2t:"Новые возможности!",
            s2d:`Наш веб-сайт bee-volunteers.com теперь дополнен новыми функциями для вас
            В кратчайшие сроки вы можете расширить свою волонтерскую группу на этой платформе.`,
            s2i:`Волонтерская деятельность, групповая деятельность и социальное развитие теперь проще с нашей веб-платформой.`,

            s3t:"Волонтеры приступили к работе",
            s3d:`Регистрируясь на нашей платформе, волонтерские группы в настоящее время активно работают и развивают сферу волонтерства в Карагандинской области.`,
            s3i:`Количество добровольцев, желающих принести пользу обществу, увеличивается с каждым годом. Регистрируясь на нашей платформе, волонтерские группы в настоящее время активно работают и развивают сферу волонтерства в Карагандинской области.`,

            s4t:"Зарегистрируйтесь на нашем портале, станьте волонтером!",
            s4d:`Волонтерство равно отваге, мы всегда поможем вам внести свой вклад в развитие вашей Карагандинской области. А также
            Встречайте наш новый веб-сайт для достижения этой цели!`,
            s4i:` Количество добровольцев, желающих принести пользу обществу, увеличивается с каждым годом. На сегодняшний день 970 миллионов населения планеты являются волонтерами, в том числе каждый восьмой казахстанский волонтер`,

        },
        {
            s1t:"Welcome Volunteer!",
            s1d:`Volunteering is equal to courage, we will always help you to contribute to the development of your Karaganda region. As well as
            Meet our new website to achieve this goal!`,
            s1i:`The number of volunteers who want to contribute to society is increasing every year. Today, 970 million of the world's population are volunteers, including every eighth Kazakh volunteer`,
            
            s2t:"New opportunities!",
            s2d:`Our website bee-volunteers.com is now updated with new features for you
            In no time, you can expand your volunteer group on this platform.`,
            s2i:`Volunteer activities, group activities and social development are now easier with our web platform.`,

            s3t:"Volunteers set to work",
            s3d:`By registering on our platform, volunteer groups are currently actively working and developing the field of volunteering in the Karaganda region.`,
            s3i:`The number of volunteers who want to contribute to society is increasing every year. By registering on our platform, volunteer groups are currently actively working and developing the field of volunteering in the Karaganda region.`,

            s4t:"Register on our portal, become a volunteer!",
            s4d:`Volunteering is equal to courage, we will always help you to contribute to the development of your Karaganda region. As well as
            Meet our new website to achieve this goal!`,
            s4i:`The number of volunteers who want to contribute to society is increasing every year. Today, 970 million of the world's population are volunteers, including every eighth Kazakh volunteer`,

        }
    ])
    return(
        <div className="slider-container">
            <div className="slides-container">
                <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/>
                
                <div className="slide first">
                <CardColored 
                            title={getWord(words, lang, 's1t')}
                            desc={getWord(words, lang, 's1d')}
                            style={{
                                backgroundSize:'cover'
                            }}
                            index={1}
                            logo={'https://cdn4.iconfinder.com/data/icons/new-year-color-line/64/15-confetti-128.png'}
                            link={'/auth'}
                            intro={getWord(words, lang, 's1i')}
                            bgImg={'https://bilimdinews.kz/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-08-at-18.39.08.jpeg'}
                    />
                </div>

                <div class="slide second">
                    <CardColored 
                            title={getWord(words, lang, 's2t')}
                            desc={getWord(words, lang, 's2d')}
                            bgImg={'https://ehonews.kz/wp-content/uploads/2021/06/photo_301648.jpg'}
                        
                            index={2}
                            logo={'https://cdn4.iconfinder.com/data/icons/creative-process-53/64/insight-intelligence-creative-solutions-opportunity-256.png'}
                            link={'/auth'}
                            intro={getWord(words, lang, 's2i')}
                    />
                </div>
        
                <div class="slide third">
                <CardColored 
                            index={3}
                            title={getWord(words, lang, 's3t')}
                            desc={getWord(words, lang, 's3d')}
                            bgImg={'https://www.inform.kz/radmin/fotofiles/2022/09/17/2209171800313740f.jpg'}
                            logo={'https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/COLLABORATE-256.png'}
                            link={'/auth'}
                            intro={getWord(words, lang, 's3i')}
                    />
                </div>
        
                <div class="slide fourth">
                <CardColored 
                            index={4}
                            title={getWord(words, lang, 's4t')}
                            desc={getWord(words, lang, 's4d')}
                            logo={'https://cdn4.iconfinder.com/data/icons/new-year-color-line/64/15-confetti-128.png'}
                            link={'/auth'}
                            bgImg={`https://rus.azattyq-ruhy.kz/cache/imagine/main_page_full/uploads/news/2020/02/12/5e43bc9a6f79e673098969.jpg`}
                            intro={getWord(words, lang, 's4i')}
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