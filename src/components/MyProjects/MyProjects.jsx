import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useGroup from "../../hooks/useGroup";
import './MyProjects.css';

const MyProjects = () => {
    const {isAuthenticated} = useAuth();
    const {getOneGroup} = useGroup();
    const [projects, setProjects] = useState([]);
    const params = useParams();

    const load = async () => {
        const user = await isAuthenticated();

        if(user.status) {
            const res = await getOneGroup(params.id);
            setProjects(res.projects);
            console.log(res.projects);
        }
    }

    useEffect(() => {
        load();
    }, []);


    return(
        <div className="my-projects-container">
            <div style={{display:'flex'}}>
                <div className="my-projects-metrics">
                <div className="my-projects-metrics-label">
                    <h1 className="border-bottom">Метрика</h1>
                </div>
                <div className="my-projects-metrics-items">
                    <div className="my-projects-metrics-item">
                        <img src="https://cdn4.iconfinder.com/data/icons/office-and-business-conceptual-flat/169/21-256.png"/>
                        <h1>{projects.length}</h1>
                        <h3>Барлық жоба</h3>
                    </div>
                    <div className="my-projects-metrics-item">
                        <img src="https://cdn3.iconfinder.com/data/icons/leto-space/64/__rocket_launch-128.png"/>
                        <h1>0</h1>
                        <h3>Аяқталған жобалар</h3>
                    </div>
                    <div className="my-projects-metrics-item">
                        <img src="https://cdn4.iconfinder.com/data/icons/volunteering/128/volunteers-group-community-people-128.png"/>
                        <h1>3</h1>
                        <h3>Еріктілер</h3>
                    </div>
                </div>
            </div>
            <div className="my-projects-new-container">
                <h1>Жаңа жоба бастау</h1>
                <div className="my-projects-new-button">
                    <NavLink to={'/myprojects/new'}>
                        <img src="https://cdn2.iconfinder.com/data/icons/hand-holding-stuff/960/Business_Launch_Marketing_Airplane_Paper_Paper_airplane-256.png" />
                    </NavLink>
                    <div className="my-projects-new-button-btn">
                    <NavLink to={`/myprojects/${params.id}/new`}>
                        +
                    </NavLink>
                    </div>
                </div>
            </div>
          </div>  
            <div className="my-projects-published-container">
                <h1 className="border-bottom">Біздің жобалар</h1>
                <div className="my-projects-published-items-container">
                    {projects && projects.map((project, key) => (
                         <div className="my-projects-pub-item" key={key}>
                         <div className="my-projects-pub-avatar">
                                <NavLink to={'/myprojects/' +params.id + '/'+ project._id}>
                                    <img src={project.avatarURL} />
                                 </NavLink>
                             <p className="my-projects-pub-intro">
                                {project.desc}
                             </p>
                         </div>
                         <div className="my-projects-pub-desc">
                             <h3 className="my-projects-title">{project.name}</h3>
                             <div className="my-projects-pub-metrics">
                                 Аяқтау күні:
                                 <input type={'date'} value={project.deadline} readOnly/>
                             </div>
                         </div>
                     </div>
                    )) }
                   
                </div>
            </div>
        </div>
    )
}

export default MyProjects;