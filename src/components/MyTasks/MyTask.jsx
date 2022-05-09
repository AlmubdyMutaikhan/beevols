import { useEffect, useState } from 'react';
import './Notification.css';


const MyTasks = () => {

    const tasks = [
        {
            name : '3 Еріктімен дос болу',
            desc:'Алғашқы 3 еріктімен тіл табысып, жаңа достар табыңыз',
            points:20,
            status:true,
            stars: 1,
        },
        {
            name : '2 Жобаға тіркелу',
            desc:'2 Еріктілік жобасына тіркеліңіз',
            stars:1,
            points:10,
            status:false
        },
        
        {
            name : '+15 Еріктімен дос болу',
            desc:'Тағы 15 еріктімен тіл табысып, жаңа достар табыңыз',
            points:30,
            stars:2,
            status:false
        },
        
        {
            name : '2 Жобаны сәтті аяқтау',
            desc:'Алғашқы 2 жобаны сәтті аяқтаңыз',
            points:20,
            stars:2,
            status:false
        },
        
        {
            name : '50 Еріктімен дос болу',
            desc:'50 Еріктімен тіл табысып, жаңа достар табыңыз',
            points:25,
            stars:2,
            status:false
        },
        
        {
            name : '+3 Жобаны сәтті аяқтау',
            desc:'Тағы 3 еріктілік жобасына тіркеліңіз',
            points:25,
            stars:2,
            status:false
        },
        {
            name : '100 Еріктімен дос болу',
            desc:'100 Еріктімен тіл табысып, жаңа достар табыңыз',
            points:40,
            stars: 3,
            status:false
        },

    ]



    return(
        <div className="mytasks-container">
            <h1>Квесттер</h1>
            <div className="mytasks-card-container">
                {tasks.map((i, id) => (
                          <div className={`mytasks-item-container`} key={id}>
                          <h2>{i.name}</h2>
                          <p>{i.desc}</p>
                          <a>
                              <h3 style={{
                                  marginRight:'10px'
                              }}> {i.points} B </h3>
                              <h3> {i.stars} <i class="fas fa-star" style={{color:'var(--first)'}}></i></h3>
                          </a>
                           <a style={{background: i.status  && "green"}}>{i.status ? "Орындалды" : "Орындау"}</a>
                    
                     </div>
                ))}
              

                
            </div>
           
        </div>
    )
}

export default MyTasks;