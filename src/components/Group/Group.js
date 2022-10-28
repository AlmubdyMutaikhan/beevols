import useUser from '../../hooks/useUser';
import './Group.css';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useGroup from '../../hooks/useGroup';

import Notification from '../Notification/Notification';
import Loading from '../Loading/Loading';
import { FaFontAwesome } from 'react-icons/fa';
import EventCalendar from '../EventCalendar/EventCalendar';

const GroupProfile = () => {
    const { getOneGroup, requestToGroup } = useGroup();
    const {isAuthenticated} = useAuth();
    const params = useParams();
    const [userID, setUserId] = useState('');
    const [groupData, setGroupData] = useState({
        name : 'Loading..',
        description : 'Loading..',
        direction:'Loading..',
        avatarURL : 'https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif'
        ,projects : [{}],
        members : [{}],
        activity:[{}],
        contacts : {
            email:'Loading..',
            phone:'Loading..'
        }
    });

    const [loading, setLoading] = useState(false);
    const [requested, setRequested] = useState(false);

    const load = async () => {
        try {
            const data = await getOneGroup(params.id);
            const user = await isAuthenticated();
            console.log(data.activity.reverse());
            setGroupData(data);
            if(user.status) {
                setUserId(user.payload.id);
            }

            console.log(data.contacts);

            
        } catch(err) {
            console.log(err);
        }
    }

    const addToGroup = async () => {
        try {
            setLoading(true);
            const res = await requestToGroup(userID, groupData.admin, params.id);
            setLoading(false);
            setRequested(true);

            setTimeout(() => {
                setRequested(false);
            }, 3000);
            console.log(res);

        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
       load();
    }, []);

const [likes, setLikes] = useState(0);
    
    return(
            <>
                <div className="group-profile-container">
            <div className='group-profile-main-container'>
                <div className='group-profile-avatar-container'>
                    <img src={groupData.avatarURL} />
                </div>
                <div className='group-profile-metrics-container'>
                    <div className='group-profile-id-container'>
                        <p>Ерікті тобының ID</p>
                        <p className='group-profile-id'>{params.id}</p>
                    </div>
                    <div className='group-profile-data-container'>
                        <div className='group-profile-data-item'>
                        <i className="fad fa-newspaper"></i>
                            <p>Жазба</p>
                            <h2>{groupData.activity.length}</h2>
                        </div>
                        <div className='group-profile-data-item'>
                            <i className="fad fa-users"></i>
                            <p>Ерікті</p>
                            <h2>25</h2>
                        </div>
                        <div className='group-profile-data-item'>
                        <i className="fas fa-rocket"></i>
                            <NavLink to={'/myprojects/'+params.id}>
                                <p style={{color:'black'}}>Жобалар</p>
                            </NavLink>
                            <h2>{3}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='group-profile-personal-container'>
                <div className='group-profile-name-container'>
                    <h1>{groupData.name}</h1>
                </div>
                <div className='group-profile-personal-item-container'>
                    <div className='group-profile-personal-text'>
                        <h2>Жеке ақпарат</h2>
                    </div>
                    <div className='group-profile-personal-items'>
                        <div className='group-profile-personal-item'>
                            Бағыт: <span>{groupData.direction}</span>
                        </div>
                        <div className='group-profile-personal-item'>
                            Мекен-жайы: <span>{groupData.adress}</span>
                        </div>
                        <div className='group-profile-personal-item'>
                            E-mail: <span>{groupData.contacts.email}</span>
                        </div>
                        <div className='group-profile-personal-item'>
                            Телефон нөмірі: <span>{groupData.contacts.phone}</span>
                        </div>
                        <div className='group-profile-personal-item'>
                            Жетістіктер: <span>{}</span>
                        </div>
                        <div className='group-profile-personal-item'>
                            Топ басшысының ID: <span><NavLink to={'/user/' + groupData.admin} className='blue'> {groupData.admin} </NavLink> </span>
                        </div>
                    </div>
                </div>
                <div className='group-profile-personal-about-container'>
                    <h1>Топ туралы</h1>
                    <p>{groupData.description}</p>
                </div>
                <div className='group-profile-add-news-container' style={{
                    display:'flex',
                    width:'250px',
                    marginLeft:'60%',
                    justifyContent:'space-between'
                    
                }}>
                    {groupData.admin === userID && <>
                        <NavLink to={'/mypost/' + groupData._id} style={{
                                marginLeft:'-50px',
                               
                        }}>
                                        <p> 
                                            Жаңалық қосу</p>
                                </NavLink> 
                                <NavLink to={`/group/${groupData._id}/event`}>
                                        <p> 
                                            Іс-шара өткізу</p>
                                </NavLink> 

                    </> 
                    } {groupData.admin !== userID && !groupData.members.includes(userID) && 
                            <p style={{cursor:'pointer', marginRight:'',
                            background:'var(--fifth)',
                                padding:'10px 35px',
                                borderRadius:'15px',
                                marginLeft:'70%',
                                marginTop:'-30%',
                               
                            }} onClick={addToGroup}> 
                                {userID !== '' ? 'Топқа кіру' : 'Топпен байланысу үшін олардың контакітілерін қолданыңыз' }
                            </p>
                        }
                        {groupData.admin !== userID && groupData.members.includes(userID) &&  
                            <p> 
                                Топ құрамында
                            </p>
                        }
                        
                        {requested && <Notification  title={'Өтініш'} msg={'Сіздің өтінішіңіз топ басшысына сәтті жіберілді'} bgColor={'green'}/>}
                </div>
                { loading && <Loading/> }
            </div>
            {/*updated && <Notification msg={'Сіздің дос болу өтнішіңіз сәтті жіберілді'} title={'Дос болу'} bgColor={'green'}/>*/ }
                </div>

                <div className='group-posts-container' style={{
                    width:'95%',
                    marginLeft:'5%'
                }}>
                    <br/>
                    <br/>
                     <EventCalendar/>
                </div>    

                <div className='group-posts-container'>
                     <div className='group-posts-logo'> 
                            <h1>Белсенділік лентасы </h1>
                            <i class="fad fa-chart-line"></i> 
                     </div>
                     <div className='group-posts'>
                                {
                                    groupData.activity.map((post, key) => {
                                        return <div key={key} className='group-post-container'>
                                                <h1 className='group-post-title'>{post.title}</h1>
                                                <div className='group-post-avatar'>
                                                <img src={post.img} />
                                            </div>
                                            <div className='post-metrics'>
                                                <div className='post-date'>
                                                   <p> Шығарылу күні: 10.04.22 </p>
                                                </div>
                                                <div className='post-likes'>
                                                    <div className='post-like like1'>
                                                        <i class="fas fa-heart"></i>
                                                        <p onClick={() => {setLikes(prv => prv + 1) }}>{likes}</p>
                                                    </div>
                                                    <div className='post-like comment1'>
                                                    <i class="fas fa-comments"></i>
                                                        <p>{post && post.comments && post.comments.length}</p>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className='post-text'>
                                                {post.content}
                                            </div>
                                            <div className='space-container'>
                                                <p></p>
                                            </div>
                                            </div>  
                                    })
                                }
                    </div>
                    
                </div>
            </>
           
    )
}

export default GroupProfile;

/*


*/