import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import './NewEvent.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import Loading from "../Loading/Loading";
import Notification from "../Notification/Notification";

import { useNavigate, useParams } from "react-router-dom";
import useEvent from "../../hooks/useEvent";

const NewEvent = () => {


    const [avatarFile, setAvatarFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [uploaded, setUploaded] = useState(false);
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const params = useParams();
    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState('green')

    const {isAuthenticated} = useAuth();
    const {postEvent} = useEvent(setLoading, setMsg);
    const navigate = useNavigate();

    const fileHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setAvatarFile(file);
    }

    const handleUpdate = async () => {
        const user = await isAuthenticated();
        
        if(user.status) {
            const is = {
                    title,
                    info,
                    img : localStorage.getItem('img'),
                    place,
                    date
            }
            
            const res = await postEvent({is, gId:params.id});
            
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

            const storageRef = ref(storage, `/events/group-event-${params.id}${title}.jpg`);
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
                <input type={'text'} className="blog-input" placeholder={'Атауы'} onChange={e=>setTitle(e.target.value)}/>
                <input type={'date'} className="blog-input" placeholder={'Өту күні'} onChange={e=>setDate(e.target.value)}/>
                <input type={'text'} className="blog-input" style={{fontSize:'20px'}} 
                onChange={e=>setPlace(e.target.value)} placeholder={'Өту орны'}/>
                <textarea 
                        type={'text'}
                        className="blog-input"
                        style={{fontSize:'20px'}} 
                        onChange={e=>setInfo(e.target.value)}
                        placeholder={'Сипаттама'}>
                </textarea>
                <input type={'file'} onChange={fileHandler} className='avatar-file-submit'/>
                <div className='blog-submit' onClick={handleUpdateAll}>
                    <a>Жаңа іс-шара құру</a>
                </div>
                {loading && <Loading/>}
                {uploaded && <Notification  title={'Хабарлама'} msg={msg} bgColor={status}/>}
            </div>
        </div>
    )
}

export default NewEvent;