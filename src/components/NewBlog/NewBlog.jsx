import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useBlog from "../../hooks/useBlog";
import './NewBlog.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import Loading from "../Loading/Loading";
import Notification from "../Notification/Notification";

const NewBlog = () => {
    const {isAuthenticated} = useAuth();
    const {postMyBlog} = useBlog();
    const [avatarFile, setAvatarFile] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [content, setContent] = useState('');
    const [uploaded, setUploaded] = useState(false);

    const fileHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setAvatarFile(file);
    }

    const handleUpdate = async () => {
        const user = await isAuthenticated();
        
        if(user.status) {
            const data = {
                id : user.payload.id,
                blog : {
                    title,
                    desc,
                    content,
                    img : localStorage.getItem('img')
                }
            }
            const res = await postMyBlog(data);
            
            setLoading(false);
            setUploaded(true);
            localStorage.removeItem('img');
            setTimeout(() => {
                setUploaded(false);
            }, 3000);
        }
    }

    const handleUpdateAll = (e) => {
        e.preventDefault();
        if(!avatarFile) {
           alert('Сіз фото жүктеуіңіз керек')
        } else {
            setLoading(true);

            const storageRef = ref(storage, `/blogs/blog-${title}.jpg`);
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
            <h1>Жаңа жазба <img src="https://cdn3.iconfinder.com/data/icons/education-and-learning-set-2-1/256/71-128.png"/></h1>
            <div className="create-blog-form">
                <input type={'text'} className="blog-input" placeholder={'Тақырып'} onChange={e=>setTitle(e.target.value)}/>
                <input type={'text'} className="blog-input" style={{fontSize:'20px'}}  onChange={e=>setDesc(e.target.value)} placeholder={'Сипаттама'}/>
                <textarea className="blog-text" placeholder={'Контент'} onChange={e=>setContent(e.target.value)}></textarea>
                <input type={'file'} onChange={fileHandler} className='avatar-file-submit'/>
                <div className='blog-submit' onClick={handleUpdateAll}>
                    <a>Сақтау</a>
                </div>
                {loading && <Loading/>}
                {uploaded && <Notification  title={'Жариялау'} msg={'Сіздің жазбаңыз сәтті жарияланды'} bgColor={'green'}/>}
            </div>
        </div>
    )
}

export default NewBlog;