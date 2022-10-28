import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useNotification from '../../hooks/useNotifications';
import './Sidebar.css';

const Sidebar = () => {

    const {loadNotifications} = useNotification();
    const [newNotifications, setNewNotifications] = useState(false);
    const {isAuthenticated} = useAuth();
    
    const load = async () => {
        const data = await isAuthenticated();
        const res = await loadNotifications(data.payload.id);  
        setNewNotifications(!res.notifications.at(-1).isRead);
    }

    useEffect(() => {
        load();
    }, []);


    return(
        <div className="sidebar-container">
            <div className="sidebar-items-container">
                <div className='sidebar-item-container'>
                    <div className='sidebar-logo-container'>
                        <NavLink to={'/profile'}>
                        <i class="fas fa-user"></i>
                        </NavLink>
                    </div>
                    <div className='sidebar-text-container'>
                        <NavLink to={'/profile'}>
                        <p>Профиль</p>
                        </NavLink>

                    </div>
                   
                </div>
                <div className='sidebar-item-container'>
                    <div className='sidebar-logo-container'>
                    <NavLink to={'/notifications'}>
                        {newNotifications ? <i class="fad fa-bells"></i> : <i class="fas fa-bell"></i>   
                        
                        
                        }

                        </NavLink>
                    </div>
                    <div className='sidebar-text-container'>
                        <NavLink to={'/notifications'}>
                            <p>Хабарландыру</p>
                        </NavLink>
                    </div>
                </div>
                <div className='sidebar-item-container'>
                    <div className='sidebar-logo-container'>
                    <NavLink to={'/myblog'}><i class="fad fa-feather-alt"></i>
                    </NavLink>
                    </div>
                    <div className='sidebar-text-container'>
                    <NavLink to={'/myblog'}>
                        <p>Блог жазу</p>
                        </NavLink>
                    </div>
                </div>
                <div className='sidebar-item-container'>
                    <div className='sidebar-logo-container'>
                    <NavLink to={'/users'}>
                    <i class="fas fa-users"></i>
                    </NavLink>
                    </div>
           
                    <div className='sidebar-text-container'>         <NavLink to={'/users'}><p>Еріктілер</p>
                    </NavLink></div>

                </div>
                <div className='sidebar-item-container'>
                    <div className='sidebar-logo-container'>
                    <NavLink to={'/mytasks'}>
                    <i class="fas fa-tasks"></i>
                    </NavLink>
                    </div>
                    <div className='sidebar-text-container'>
                    <NavLink to={'/mytasks'}>
                        <p>Квесттер</p>
                        </NavLink>
                    </div>
                </div>
                
            </div>
            <div className='sidebar-setting-container'>
                <div className='sidebar-setting-item-container'>
                <i class="fas fa-cog"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;