import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import './Users.css';

const Users = () => {
    const {getAllUsers} = useUser();
    const [users, setUsers] = useState([]);
    const {isAuthenticated} = useAuth();
    const load = async () => {
        try {
            const myUser = await isAuthenticated();
            let data = await getAllUsers();
            
            data = data.filter((value) => {
                return value._id !== myUser.payload.id
            })
            

            setUsers(data);
        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        load();
    }, []);

    return(
        <div className="users-container">
            <h1>Еріктілер</h1>
            <div className="users-card-container">
                {users.map((user, key) => (
                    <div className="users-item-container" key={key}>
                    <div className='user-item-avatar'>
                        <img src={user.avatarURL} />
                    </div>
                    <div className='user-item-data'>
                        <h2>{`${user.sname} ${user.fname}`}</h2>
                        <p><span>Бағыт: </span>{`${user.major}`}</p>
                            <NavLink to={'/user/'+user._id}>
                                Профильге өту
                            </NavLink>
                    </div>
                    
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Users;