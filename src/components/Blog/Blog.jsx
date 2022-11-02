import { async } from '@firebase/util';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBlog from '../../hooks/useBlog';
import './Blog.css';
import Notification from '../Notification/Notification';
import useAuth from '../../hooks/useAuth';

const Blog = (props) => {
    const {getBlog, postComment, postLike} = useBlog();
    const params = useParams();
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const [blogImg, setImg] = useState('https://cdn.dribbble.com/users/255512/screenshots/2215917/animation.gif');
    const [comments, setComments] = useState([]);
    const [likes, setlikes] = useState(0);
    const [author, setAuthor] = useState('');
    const [myComment, setMyComment] = useState('');
    const [blogId, setBlogId] = useState('');
    const {isAuthenticated} = useAuth();
    const [notification, setNotification] = useState({visible:false, msg:''});
    
    
    const load = async () => {
        const data = await getBlog(params.id);
        setTitle(data.title);
        setImg(data.img);
        setContent(data.content);
        setAuthor(data.author.sname + ' ' +  data.author.fname);
        setComments(data.comments);
        setBlogId(data._id);
        setlikes(data.likes);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hello');
        try {
            const user = await isAuthenticated();
            if(user.status) {
                await postComment(blogId, user.payload.id, myComment);
                setMyComment('');
                await load();
                
            } else {
                setNotification({visible:true, msg:'Пікір қалдыру үшін платформаға тіркелу керек'});
                setTimeout(() => {
                    setNotification({visible:false,msg:''});
                }, 4000);
            }
        } catch(err) {
            console.log(err);
        }
    }
    
    const addLike = async () => {
        //e.preventDefault();
        await postLike(blogId);
        setlikes(prev => prev + 1);
    }

    useEffect(() => {
        load();
    }, []);

    return(
        <div className="blog-container">
            <div className="blog-intro-container">
                <h1>{title}</h1>
                <img src={blogImg} />
            </div>
            <div className="blog-body-container">
                <p>
                    {content}
                </p>
            </div>
            <div className='blog-credentials'>
                <h1>Авторы: <span><i>{author}</i></span></h1>
                <div className='blog-likes'>
                    {likes}
                    <i class="fas fa-heart" onClick={addLike}></i>
                </div>
            </div>
            <div className='blog-comment-section'>
                <h1>Ой-пікір </h1>
                <div className='blog-comment-leave'>
                    <input type={'text'} className='blog-comment-input'  value={myComment} onChange={(e)=>{setMyComment(e.target.value)}} placeholder='Пікір...'/>
                    <input type={'submit'} className='comment-submit' onClick={handleSubmit} value={'Пікір қалдыру'} />
                </div>
                {comments.map((com, key) => {
                    return (<div className='blog-comment-item'>
                            <div className='blog-comment-logo'>
                                <img src={com.avatarLink} />
                            </div>
                            <div className='blog-comment-txt'>
                                <p>{com.name}</p>
                                <h3>{com.comment}</h3>
                            </div>
                        </div>)
                })}
            </div>
{notification.visible && <Notification title={'Упс..'} bgColor={'red'} msg={notification.msg}  />}
        </div>
    )
}

export default Blog;