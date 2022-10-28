import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import './EventList.css';
import Notification from '../Notification/Notification';
import useGroup from '../../hooks/useGroup';
const Notifications = () => {
    

    const {isAuthenticated} = useAuth();


    const [updated, setUpdated] = useState(false);

    const load = async () => {
        try {
            const user = await isAuthenticated();
          
           // console.log(nots.notifications); 
        } catch(err) {
            console.log(err);
        }
    }


    const returnNot = (not) => {
        if(not.notType === 'add') {
            return <div className={`notifications-item-container ${not.isRead ? 'read' : ''}`} key={not._id}>
                        <h2>{not.notName}</h2>
                        <p>{not.notMsg}</p>
                        {!not.isRead && <a  onClick={() => {handleFriendMsg(not.notLink, not._id)}}>Қабылдау</a>}
                    </div>
        } else if(not.notType === 'groupadd') {
            return <div className={`notifications-item-container ${not.isRead ? 'read' : ''}`} key={not._id}>
                        <h2>{not.notName}</h2>
                        <p>{not.notMsg}</p>
                        {!not.isRead && <a  onClick={() => {handleGroupAdd(not.notLink)}}>Қабылдау</a>}
                    </div>
        } 
        
        else if(not.notType === 'msg') {
            return <div className={`notifications-item-container`} key={not._id}>
                        <h2>{not.notName}</h2>
                        <p>{not.notMsg}</p>
                        {!not.isRead && <a  onClick={() => {handleFriendMsg(not.notLink, not._id)}}>Ок</a>}
                    </div>
        }
    }

    const handleFriendMsg = async (link, notID) => {
        try {
            console.log(link, notID);
            const res = await readFriendMsg(link, notID);
            setUpdated(true);
            setTimeout(() => {
                setUpdated(false);
            }, 4000);
            load();
        } catch(err) {
            alert('Smth went wrong');
        }
    }

    const handleGroupAdd = async (notURL) => {
        try {
            console.log(notURL);
            console.log('hello');
            await addToGroup(notURL);
            setUpdated(true);
            setTimeout(() => {
                setUpdated(false);
            }, 4000);
            load();
        } catch(err) {
            alert('Smth went wrong');
        }
    }



    useEffect(() => {
        load();
    }, []);

    return(
        <div className="notifications-container">
            <h1>Хабарландыру</h1>
            <div className="notifications-card-container">
                
                
            </div>
          
        </div>
    )
}

export default Notifications;