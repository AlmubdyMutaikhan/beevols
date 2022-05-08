import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import './NewGroup.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import Loading from "../Loading/Loading";
import Notification from "../Notification/Notification";
import useGroup from "../../hooks/useGroup";
import { useNavigate } from "react-router-dom";

const NewGroup = () => {
    const {isAuthenticated} = useAuth();
 
    const [avatarFile, setAvatarFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const {createNewGroup} = useGroup();
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [direction, setDir] = useState('');
    const [uploaded, setUploaded] = useState(false);
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
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
                    direction,
                    avatarURL : localStorage.getItem('img'),
                    adress,
                    contacts : {
                        email, phone
                    }
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
            <h1>Жаңа топ <img src="https://cdn4.iconfinder.com/data/icons/sport-fitness-vol-01/512/44-team-teamwork-group-encouragement-256.png"/></h1>
            <div className="create-blog-form">
                <input type={'text'} className="blog-input" placeholder={'Атауы'} onChange={e=>setName(e.target.value)}/>
                <input type={'text'} className="blog-input" placeholder={'Бағыты'} onChange={e=>setDir(e.target.value)}/>
                <input type={'text'} className="blog-input" placeholder={'Мекен-жайы'} onChange={e=>setAdress(e.target.value)}/>
                <input type={'email'} className="blog-input" style={{fontSize:'20px'}}  onChange={e=>setEmail(e.target.value)} placeholder={'E-mail'}/>
                <input type={'text'} className="blog-input" style={{fontSize:'20px'}}  onChange={e=>setPhone(e.target.value)} placeholder={'Телефон нөмірі +7 (xxx) xxx xx xx'}/>
                <input type={'text'} className="blog-input" style={{fontSize:'20px'}}  onChange={e=>setDesc(e.target.value)} placeholder={'Сипаттама'}/>
                <input type={'file'} onChange={fileHandler} className='avatar-file-submit'/>
                <div className='blog-submit' onClick={handleUpdateAll}>
                    <a>Жаңа топ құру</a>
                </div>
                {loading && <Loading/>}
                {uploaded && <Notification  title={'Құттықтаймыз'} msg={'Сіздің тобыңыз сәтті ашылды'} bgColor={'green'}/>}
            </div>
        </div>
    )
}

export default NewGroup;