import React from "react";
import './Report.css';

const Report = () => {
    return(
    <div className="report-container">
        <div className="report-texts">
            <div className="report-logo">
            <h1>Соңғы аяқталған есептер</h1>
                <img    
                        src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_Search_Engine-Ranking-index-report-128.png"/>
            </div>
            
            <div className="see-other-reports-btn">
                <p>Барлық есептер</p>
            </div>
        </div>
        <div className="reports">
            <div className="main-report">
                <h1 className="glass-bg">Ташкент-Семинар</h1>
                <p className="glass-bg">Жақында Ташкент-Семинар бағдарламасы өткен болатын</p>
            </div>
            <div className="other-reports">
                <div className="other-report-item">
                    <h1 className="glass-bg">Like:қол ұшын созу маңызды</h1>
                    <p className="glass-bg">Біз қол ұшын созамыз</p>
                </div>

                <div className="other-report-item secondreport">
                    <h1 className="glass-bg">BizBirgemiz</h1>
                    <p className="glass-bg">Еріктілер жаппай екпе алды</p>
                </div>
            </div>
        </div>
        
    </div>)
}

export default Report;