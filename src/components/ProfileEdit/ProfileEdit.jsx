import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';

import './ProfileEdit.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
const ProfileEdit = () => {
    //const { user, setUser } = useContext(UserContext);
    
    const {updateUser, getUser} = useUser();
    const { isAuthenticated } = useAuth();
    const [id, setID] = useState('loading...');
    const [name, setName] = useState({});
    const [region, setRegion] = useState('loading...');
    const [about, setAbout] = useState('loading...');
    const [major, setMajor] = useState('loading...');
    const [loading, setLoading] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [date, setDate] = useState(null);
    const [wins, setWins] = useState('loading...');
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarURL, setAvatarURL] = useState('https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif');
    const [preview, setPreview] = useState(null);

    const load = async () => {
        const user = await isAuthenticated();

        if(user.status) {
            setID(user.payload.id);
            setName({fname : user.payload.user.fname, sname : user.payload.user.sname});
            const userData = await getUser(user.payload.id);
            setAbout(userData.user.about);
            setRegion(userData.user.region);
            setMajor(userData.user.major);
            setDate(userData.user.date);
            setWins(userData.user.wins);
            setAvatarURL(userData.user.avatarURL);
        }
    }

    useEffect(() => {
        load();
    }, []);

   
    const handleUpdate = async () => {
        try {   
            const user = await isAuthenticated();
            if(user.status) {
                setLoading(true);
                await updateUser(user.payload.id, { region, about, major, date, wins, avatarURL : localStorage.getItem('img') ? localStorage.getItem('img') : avatarURL});
                setUpdated(true);
                setLoading(false);
                
                setTimeout(() => {
                    setUpdated(false);
                    localStorage.removeItem('img');
                }, 3700);
            }
           
        } catch(err) {
            console.log(err);
        }
    }

    const handleUpdateAll = (e) => {
        e.preventDefault();
        if(!avatarFile) {
            handleUpdate();
        } else {
            setLoading(true);

            const storageRef = ref(storage, `/avatars/avatar-${id}.jpg`);
            const uploadTask = uploadBytesResumable(storageRef, avatarFile);
            
            uploadTask.on("state_changed", 
                () => {},
                (err) => {
                    console.log(err);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then(res => {
                        console.log(res);
                        setAvatarURL(res);
                        localStorage.setItem('img', res);
                        handleUpdate();
                    })
            });
        }
    }
    
    const fileHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setAvatarURL(objectUrl);
        setAvatarFile(file);
    }


    

    return(
        <div className="profile-edit-container">
            <div className='profile-main-container'>
                <div className='profile-avatar-container'>
                    <img src={avatarURL} />
                </div>
                <div className='profile-metrics-container'>
                    <div className='profile-id-container'>
                        <p>Еріктінің ID</p>
                        <p className='profile-id'>{id}</p>
                    </div>
                    <input type={'file'} className='avatar-file-submit' onChange={fileHandler} />
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
                            Туған жылы: <span><input className='input-edit' type={'date'} value={date} required onChange={e => {setDate(e.target.value)}}/></span>
                        </div>
                        <div className='profile-personal-item'>
                            Өңір: <span>
                                <input type={'text'} className='input-edit' required value={region} onChange={(e) => {setRegion(e.target.value)}}/>

                            </span>
                        </div>
                        <div className='profile-personal-item'>
                            Бағыт: <span><input className='input-edit' type={'text'} required value={major} onChange={(e) => {setMajor(e.target.value)}}/>
                            </span>
                        </div>
                        <div className='profile-personal-item'>
                            Жетістіктер: <span><input className='input-edit' value={wins} onChange={e => setWins(e.target.value)} type={'text'} required/></span>
                        </div>
                    </div>
                </div>
                <div className='profile-personal-about-container'>
                    <h1>Өзім туралы</h1>
                    <p><input type={'text'} className='input-edit input-long' placeholder={'Өзіңіз туралы кішігірм ақпарат...'} value={about} style={{color:'white'}} onChange={(e) => {setAbout(e.target.value)}}/></p>
                </div>
                
                <div className='profile-edit'>
                    <a onClick={handleUpdateAll}>Сақтау</a>
                </div>
                <div className='center-x'>
                { loading && <Loading/> }
                </div>
                
            </div>
            {updated && <Notification title={'Өңдеу'} msg={'Сіздің парақшаңыз сәтті өңделді'} bgColor={'green'} />}
            
        </div>
    )
}

export default ProfileEdit;