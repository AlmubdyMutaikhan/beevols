import { NavLink } from "react-router-dom"
import './WannaBe.css';

const WannaBe = () => {
  return(
      <div className="wannabe-container">
          <div className="wannabe-text">
          <h1>Ерікті болуға дайынсың ба?</h1>
          <p style={{width:'50%'}}>Қазақстандық еріктілер қозғалысына қосылыңыз! Нөміріңізді енгізіңіз және тіркелу үшін құпия сөз жасаңыз. Сіз көптеген қызықты жобаларды және әлемді сәл жақсырақ және жарқын ету мүмкіндігін таба аласыз.
          </p>
          <div className="wannabe-btn">
              <NavLink to="/auth">Ерікті болу</NavLink>
          </div>
          </div>
          <div className="wannabe-img">
            <img src="https://cdn1.iconfinder.com/data/icons/international-youth-day/132/6-128.png"/>
          </div>
          
      </div>
  )  
}

export default WannaBe;