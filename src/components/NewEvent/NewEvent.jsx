import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import './NewEvent.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import Loading from "../Loading/Loading";
import Notification from "../Notification/Notification";
import useGroup from "../../hooks/useGroup";
import { useNavigate } from "react-router-dom";

const NewEvent = () => {
    const {isAuthenticated} = useAuth();
 
    const [avatarFile, setAvatarFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const {createNewGroup} = useGroup();
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [uploaded, setUploaded] = useState(false);
    const [place, setPlace] = useState('');
    const [email, setEmail] = useState('');



    const navigate = useNavigate();
    const fileHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setAvatarFile(file);
    }

    const handleUpdate = async () => {
        const user = await isAuthenticated();
        
        if(user.status) {
            const data = {
                    admin : user.payload.id,
                    name,
                    description,
                    avatarURL : localStorage.getItem('img'),
                    place
            }
            
            const res = await createNewGroup(data);
            
            setLoading(false);
            setUploaded(true);
            localStorage.removeItem('img');
            setTimeout(() => {
                setUploaded(false);
                navigate('/groups');
            }, 3000);
        }
    }

    const handleUpdateAll = (e) => {
        e.preventDefault();
        if(!avatarFile) {
           alert('Сіз фото жүктеуіңіз керек')
        } else {
            setLoading(true);

            const storageRef = ref(storage, `/groups/group-${name}.jpg`);
            const uploadTask = uploadBytesResumable(storageRef, avatarFile);
            
            uploadTask.on("state_changed", 
                () => {},
                (err) => {
                    console.log(err);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then(res => {
                        localStorage.setItem('img', res);
                        handleUpdate();
                    })
            });
        }
    }


    return(
        <div className="my-create-blog-container">
            <h1>Жаңа іс-шара <img src="https://cdn4.iconfinder.com/data/icons/sport-fitness-vol-01/512/44-team-teamwork-group-encouragement-256.png"/></h1>
            <div className="create-blog-form">
                <input type={'text'} className="blog-input" placeholder={'Атауы'} onChange={e=>setName(e.target.value)}/>
                <input type={'date'} className="blog-input" placeholder={'Өту күні'} onChange={e=>setPlace(e.target.value)}/>
                <input type={'email'} className="blog-input" style={{fontSize:'20px'}}  onChange={e=>setEmail(e.target.value)} placeholder={'Өту орны'}/>
                <textarea 
                        type={'text'}
                        className="blog-input"
                        style={{fontSize:'20px'}} 
                        onChange={e=>setDesc(e.target.value)}
                        placeholder={'Сипаттама'}>
                </textarea>
                <input type={'file'} onChange={fileHandler} className='avatar-file-submit'/>
                <div className='blog-submit' onClick={handleUpdateAll}>
                    <a>Жаңа іс-шара құру</a>
                </div>
                {loading && <Loading/>}
                {uploaded && <Notification  title={'Құттықтаймыз'} msg={'Сіздің іс-шараңыз сәтті ашылды'} bgColor={'green'}/>}
            </div>
        </div>
    )
}

export default NewEvent;