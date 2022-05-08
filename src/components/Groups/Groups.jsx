import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useGroup from '../../hooks/useGroup';
import './Group.css';

const Groups = () => {
    const { getAllGroups } = useGroup();
    const [groups, setGroups] = useState([]);

    const load = async () => {
        try {
            let data = await getAllGroups();
            setGroups(data);
        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        load();
    }, []);

    return(
        <div className="groups-container">
            <div className='group-label'>
                <h1>Ерікті топтары</h1>
                <div className='group-create-container'>
                        <NavLink to={'/mygroup/new'}>
                            Жаңа топ ашу
                        </NavLink>
                </div>
            </div>
     
            <div className="groups-card-container">
                {groups.map((group, key) => (
                    <div className="groups-item-container" key={key}>
                        <div className='group-first-part'>
                                <div className='group-item-avatar'>
                                <img src={group.avatarURL} />
                            </div>
                            <div className='group-item-data'>
                                <h2>{group.name}</h2>
                                <p><span>Бағыт: </span>{`${group.direction}`}</p>
                            </div>
                        </div>
                        <div className='group-first-part'>
                            <div className='group-metrics-item'>
                                <i className="fas fa-rocket"></i>
                                <h2>{group.projects.length}</h2>
                                <p>Жобалар</p>
                            </div>
                            <div className='group-metrics-item'>
                                <i className="fas fa-users"></i>
                                <h2>{group.members.length}</h2>
                                <p>Қатысушылар</p>
                            </div>
                            <div className='group-metrics-item'>
                                <i className="fas fa-trophy"></i>
                                <h2>{group.members.length}</h2>
                                <p>Жетістіктер</p>
                            </div>

                        </div>
                        <div className='group-first-part'>
                            <NavLink to={'/group/' + group._id}>
                                Профильге өту
                            </NavLink>

                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Groups;