import React from "react";
import CardColored from "../Cards/CardColored/CardColored";
import './Info.css';

const Info = () => {
    return(
        <div className="info-container">
            <div className="rsrcs-container">
                <div className="card-colored-container" style={{backgroundColor: 'var(--first)' }}>
                    <h1>Ерікті болу картасы</h1>
                    <p>Ерікті болудың қыр-сырымен танысыңыз...</p>
                    <div className="img-card">
                    <img    src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Map-128.png"
                          
                            />
                    </div>
                    
                </div>

                <div className="card-colored-container">
                    <h1>Іс-шаралар</h1>
                    <p>Алдағы болатын іс-шаралардан хабардар болыңыз</p>
                    
                    <div className="img-card">
                    <img    src="https://cdn3.iconfinder.com/data/icons/bowling-alley-and-arcade-indigo-vol-2/256/Weekly_Events-128.png"
                          
                            />
                    </div>

                </div>
            </div>
            <div className="hot-news-container">
                <div className="hot-news-text">
                    <h2>Белсенді жобалар</h2>
                    <img src="https://cdn3.iconfinder.com/data/icons/unigrid-phantom-vehicles-vol-3/60/001_130_rocket_launch_start_space_ship_cosmos_transport_exploration-128.png"/>
                </div>
                <div className="hot-news-item">
                    <p className="news-title">Балаларға IT курстарын оқыту</p>
                    <p>10.10.22</p>
                </div>
                <div className="hot-news-item">
                    <p className="news-title">Khan academy курстарын аудару</p>
                    <p>28.09.22</p>
                </div>
                <div className="hot-news-item">
                    <p className="news-title">Шетел тілдерін оқытуға көмектесу</p>
                    <p>15.09.22</p>
                </div>
            </div>
        </div>
    )
}

export default Info;