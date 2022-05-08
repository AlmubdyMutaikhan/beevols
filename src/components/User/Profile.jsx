import useUser from '../../hooks/useUser';
import './Profile.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useFriends from '../../hooks/useFriends';
import Notification from '../Notification/Notification';
import Loading from '../Loading/Loading';
import { NavLink } from 'react-router-dom';
const UserProfile = () => {
    const {isAuthenticated} = useAuth();
    const [id, setId] = useState('');
    const params = useParams();
    const [region, setRegion] = useState('loading...');
    const [about, setAbout] = useState('loading...');
    const [major, setMajor] = useState('loading...');
    const [date, setDate] = useState('loading...');
    const {getUser} = useUser();
    const [name, setName] = useState({});
    const [wins, setWins] = useState('loading...');
    const [avatarURL, setAvatarURL] = useState('https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif');
    const {requestFriend} = useFriends();
    const [loading, setLoading] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [friendsList, setFriendsList] = useState([]);
    const [friendsReqList, setFriendsReqList] = useState([]);
    const [bloggs, setBloggs ] = useState([]);
    const [email, setEmail] = useState('loading...'); 

    const handleAddFriend = async () => {
        try {
           setLoading(true);
            const res = await requestFriend(id, params.id);
            setLoading(false);
            friendsReqList.push(id);
            setUpdated(true);
            setTimeout(() => {
                setUpdated(false);
            }, 3900);

          

        } catch(err) {
            console.log(err);
        }
    }

    const load = async () => {
            const myUser = await isAuthenticated();
            setId(myUser.payload.id);

            const userData = await getUser(params.id);
            console.log(userData.user);
            setAbout(userData.user.about);
            setFriendsList(userData.user.friends);
            setName({fname : userData.user.fname, sname : userData.user.sname});
            setRegion(userData.user.region);
            setMajor(userData.user.major);
            setDate(userData.user.date);
            setWins(userData.user.wins);
            setAvatarURL(userData.user.avatarURL);
            setFriendsList(userData.user.friends);
            setFriendsReqList(userData.user.requestFriendsList);
            setBloggs(userData.user.blogs);
            setEmail(userData.user.email);
        }

    useEffect(() => {
        load();
    }, []);


    
    return(
        <>
        <div className="profile-container">
            <div className='profile-main-container'>
                <div className='profile-avatar-container'>
                    <img src={avatarURL} />
                </div>
                <div className='profile-metrics-container'>
                    <div className='profile-id-container'>
                        <p>Еріктінің ID</p>
                        <p className='profile-id'>{params.id}</p>
                    </div>
                    <div className='profile-data-container'>
                        <div className='profile-data-item'>
                        <i className="fad fa-newspaper"></i>
                            <p>Жазба</p>
                            <h2>{bloggs ? bloggs.length : 0}</h2>
                        </div>
                        <div className='profile-data-item'>
                            <i className="fad fa-users"></i>
                            <p>Достар</p>
                            <h2>{friendsList.length}</h2>
                        </div>
                        <div className='profile-data-item'>
                        <i className="fas fa-rocket"></i>
                            <p>Жобалар</p>
                            <h2>0</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile-personal-container'>
                <div className='profile-name-container'>
                    <h1>{name.sname} {name.fname}</h1>
                </div>
                <div className='profile-personal-item-container'>
                    <div className='profile-personal-text'>
                        <h2>Жеке ақпарат</h2>
                    </div>
                    <div className='profile-personal-items'>
                        <div className='profile-personal-item'>
                            Туған жылы: <span> {date}</span>
                        </div>
                        <div className='profile-personal-item'>
                            Өңір: <span>{region}</span>
                        </div>
                        <div className='profile-personal-item'>
                            Бағыт: <span>{major}</span>
                        </div>
                        <div className='profile-personal-item'>
                            E-mail: <span>{email}</span>
                        </div>
                        <div className='profile-personal-item'>
                            Жетістіктер: <span>{wins}</span>
                        </div>
                        <br/>
                        <div className='profile-personal-item'>
                            <a href='https://my-pokemon-qwant-app.herokuapp.com/'
                                style={{
                                    background:'blue',
                                    padding:'10px 20px',
                                    marginTop:'50px',
                                    borderRadius:'10px'
                                }}
                            
                            target="_blank">Менің кейіпкерім (BETA):</a>
                        </div>
                    </div>
                </div>
                <div className='profile-personal-about-container'>
                    <h1>Өзім туралы</h1>
                    <p>{about}</p>
                </div>
                {id !== params.id && !friendsList.includes(id) && <div className='profile-edit' onClick={!friendsReqList.includes(id) && handleAddFriend}><a> {
                  !friendsReqList.includes(id) ? 'Дос болу' : 'Өтініш жіберілді'
                }</a></div>}
                {id !== params.id && friendsList.includes(id) && <div className='profile-edit'>
                    <a>Досым</a></div>}
            </div>
            {updated && <Notification msg={'Сіздің дос болу өтнішіңіз сәтті жіберілді'} title={'Дос болу'} bgColor={'green'}/> }
        </div>
        <div className="my-blog-published-container my-blog-published-container-profile">
                <h1 className="border-bottom">Ерікті жазбалары</h1>
                <div className="my-blog-published-items-container">
                    { bloggs && bloggs.map((blog, key) => (
                         <div className="my-blog-pub-item" key={key}>
                         <div className="my-blog-pub-avatar">
                                <NavLink to={'/blogs/' + blog._id}>
                                    <img src={blog.img} />
                                 </NavLink>
                             <p className="my-blog-pub-intro">
                                {blog.desc}
                             </p>
                         </div>
                         <div className="my-blog-pub-desc">
                             <h3 className="my-blog-title">{blog.title}</h3>
                             <div className="my-blog-pub-metrics">
                                 <div className="my-blog-pub-metrics-item">
                                     <i className="fas fa-heart" style={{color:'red'}}></i>
                                     <h3>{blog.likes}</h3>
                                 </div>
                                 <div className="my-blog-pub-metrics-item">
                                     <i className="fas fa-comment-alt" style={{color:'var(--fourth)'}}></i>
                                     <h3>10</h3>
                                 </div>
                             </div>
                         </div>
                     </div>
                    )) }
                   
                </div>
            </div>
        </>
        
    )
}

export default UserProfile;