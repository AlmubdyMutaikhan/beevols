import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useFriends from '../../hooks/useFriends';
import useNotification from '../../hooks/useNotifications';
import './Notification.css';
import Notification from '../Notification/Notification';
import useGroup from '../../hooks/useGroup';
const Notifications = () => {
    
    const [notifications, setNotifications] = useState([]);
    const {isAuthenticated} = useAuth();
    const {loadNotifications} = useNotification();
    const { readFriendMsg } = useFriends(); 
    const { addToGroup } = useGroup();

    const [updated, setUpdated] = useState(false);

    const load = async () => {
        try {
            const user = await isAuthenticated();
            const nots = await loadNotifications(user.payload.id);
            setNotifications(nots.notifications.reverse());
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
                {notifications.map((not)=>{
                        return  returnNot(not) 
            })}
                
            </div>
            {updated && <Notification bgColor={'green'} title={'Алақай!'} msg={'Қабылдау операциясы сәтті өтті'}/>}
        </div>
    )
}

export default Notifications;