import React, {useContext} from "react";
import { NavLink } from "react-router-dom"
import './WannaBe.css';
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";
const WannaBe = () => {
  const { lang, setLang } = useContext(LangContext);

    const words = [
      {
        q:'Ерікті болуға дайынсың ба?',
        a:' Қазақстандық еріктілер қозғалысына қосылыңыз! Нөміріңізді енгізіңіз және тіркелу үшін құпия сөз жасаңыз. Сіз көптеген қызықты жобаларды және әлемді сәл жақсырақ және жарқын ету мүмкіндігін таба аласыз.',
        t:'Ерікті болу'
      },
      {
        q:'Вы готовы стать волонтером?',
        a:'Присоединяйтесь к казахстанскому волонтерскому движению! Введите свой номер и придумайте пароль для регистрации. Вас ждет множество интересных проектов и возможностей сделать мир чуточку лучше и ярче.',
        t:'Стать волонтером'
      },
      {
        q:'Are you ready to volunteer?',
        a:' Join the Kazakhstan volunteer movement! Enter your number and create a password to register. You will find many interesting projects and opportunities to make the world a little better and brighter.',
        t:'Be a volunteer'
      },
    ]

  return(
      <div className="wannabe-container">
          <div className="wannabe-text">
          <h1>{getWord(words, lang, 'q')}</h1>
          <p>
           {getWord(words, lang, 'a')}
          </p>
          <div className="wannabe-btn">
              <NavLink to="/auth">
                {getWord(words, lang, 't')}
              </NavLink>
          </div>
          </div>
          <div className="wannabe-img">
            <img src="https://cdn1.iconfinder.com/data/icons/international-youth-day/132/6-128.png"/>
          </div>
          
      </div>
  )  
}

export default WannaBe;