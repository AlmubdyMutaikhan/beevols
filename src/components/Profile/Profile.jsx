import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';
import './Profile.css';
import useFriends from '../../hooks/useFriends';

const Profile = () => {
    const [id, setID] = useState('loading...');
    const [region, setRegion] = useState('loading...');
    const [about, setAbout] = useState('loading...');
    const [major, setMajor] = useState('loading...');
    const [date, setDate] = useState('loading...');
    const [friends, setFriends] = useState(0);
    const [blogs, setBlogs] = useState(0);
    const [friendsAll, setFriendsAll] = useState([]);
    const {getUser} = useUser();
    const { isAuthenticated } = useAuth();
    const [name, setName] = useState({});
    const [wins, setWins] = useState('loading...');
    const [avatarURL, setAvatarURL] = useState('https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif');
    const {getAllFriends} = useFriends();
    const [email, setEmail] = useState('loading...'); 
    const [bloggs, setBloggs ] = useState([]);

    const loadFriends = async () => {
        const user = await isAuthenticated();
        
        if(user.status) {
            const friends = await getAllFriends(user.payload.id);
            console.log(friends);
        }

    }
    const load = async () => {
        const user = await isAuthenticated();
        
        if(user.status) {
            setID(user.payload.id);
            setName({fname : user.payload.user.fname, sname : user.payload.user.sname});
            const userData = await getUser(user.payload.id);
            console.log(userData);
            setAbout(userData.user.about);
            setRegion(userData.user.region);
            setMajor(userData.user.major);
            setDate(userData.user.date);
            setWins(userData.user.wins);
            setAvatarURL(userData.user.avatarURL);
            setFriends(userData.user.friends.length);
            setBlogs(userData.user.blogs.length);
            setEmail(userData.user.email);
            setBloggs(userData.user.blogs);
        }
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
                        <p className='profile-id'>{id}</p>
                    </div>
                    <div className='profile-data-container'>
                        <div className='profile-data-item'>
                        <i className="fad fa-newspaper"></i>
                            <p>Жазба</p>
                            <h2>{blogs}</h2>
                        </div>
                        <div className='profile-data-item'>
                            <i className="fad fa-users"></i>
                            <p onClick={()=>{loadFriends();}}>Достар</p>
                            <h2>{friends}</h2>
                        </div>
                        <div className='profile-data-item'>
                        <i className="fas fa-rocket"></i>
                            <p>Жобалар</p>
                            <h2>10</h2>
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
                
                <div className='profile-edit'>
                    <NavLink to={'/profile-edit'}>
                        Өңдеу
                    </NavLink>
                </div>


            </div>
            
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

export default Profile;