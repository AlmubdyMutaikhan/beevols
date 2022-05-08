import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import './NewProject.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import Loading from "../Loading/Loading";
import Notification from "../Notification/Notification";
import { useNavigate, useParams } from "react-router-dom";
import useGroup from "../../hooks/useGroup";

const NewProject = () => {
    const {isAuthenticated} = useAuth();
 
    const [avatarFile, setAvatarFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [direction, setDir] = useState('');
    const [uploaded, setUploaded] = useState(false);
    const [date, setDate] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    
    const {createNewProject} = useGroup();

    const fileHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setAvatarFile(file);
    }

    const handleUpdate = async () => {
        const user = await isAuthenticated();
        
        if(user.status) {

            const data = {
                    name,
                    desc:description,
                    direction,
                    avatarURL : localStorage.getItem('img'),
                    deadline:date
            }

            const res = await createNewProject(data, params.id);
            console.log(res);
            setLoading(false);
            setUploaded(true);
            localStorage.removeItem('img');
            setTimeout(() => {
                setUploaded(false);
                navigate('/myprojects/'+params.id)
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
            <h1>Жаңа жоба <img src="https://cdn2.iconfinder.com/data/icons/webina-seo-development-and-marketing/128/seo_web_2-01-2-256.png"/></h1>
            <div className="create-blog-form">
                <input type={'text'} className="blog-input" placeholder={'Атауы'} onChange={e=>setName(e.target.value)}/>
                <input type={'text'} className="blog-input" placeholder={'Бағыты'} onChange={e=>setDir(e.target.value)}/>
                <br/><h3>Аяқтау күні: </h3><input type={'date'} className="blog-input" placeholder={''} onChange={e=>setDate(e.target.value)}/>
                <input type={'text'} className="blog-input" style={{fontSize:'20px'}}  onChange={e=>setDesc(e.target.value)} placeholder={'Сипаттама'}/>
                <input type={'file'} onChange={fileHandler} className='avatar-file-submit'/>
                <div className='blog-submit' onClick={handleUpdateAll}>
                    <a>Жаңа жоба бастау</a>
                </div>
                {loading && <Loading/>}
                {uploaded && <Notification  title={'Құттықтаймыз'} msg={'Сіздің жобаңыз сәтті құрылды'} bgColor={'green'}/>}
            </div>
        </div>
    )
}

export default NewProject;