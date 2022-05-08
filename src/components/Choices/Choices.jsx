import React from "react"
import './Choices.css';

const Choices = () => {
    return(
        <div className="choice-container">
            <div className="choice-title">
                <h1>
                    Өз бағытыңды таңда
                </h1>
                <img src="https://cdn3.iconfinder.com/data/icons/vol-5/128/pointer-128.png"/>
            </div>

            <div className="choices-container">
                <div className="choice-item">
                    <img src="https://qazvolunteer.kz/new/img/content/choise.jpg" />
                    <h3>Қарттарға көмектесу</h3>
                    <p>Қарт адамдарға көмектесу арқылы үлкен сауап аласыз..</p>
                </div>
                <div className="choice-item" style={{marginLeft:'30px'}}>
                    <img src="https://cdn.vikids.ru/uploads/image/image/5dae8cc36c1d40049157d4df/picture_retina_2.jpg" height={'80%'} width={'270px'} />
                    <h3>Спорт саласын дамыту</h3>
                    <p>Спорт адам өмірінің маңызды бөлігі және ол дамуды қажет етеді..</p>
                </div>
                <div className="choice-item">
                    <img src="https://qazvolunteer.kz/new/img/content/choise3.jpg" />
                    <h3>Табиғатқа қызмет ету</h3>
                    <p>Табиғатты аялау әркімнің қолынан келеді...</p>
                </div>
            </div>
        </div>
    )
}

export default Choices;