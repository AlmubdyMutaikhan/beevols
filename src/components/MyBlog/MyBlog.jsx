import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useBlog from "../../hooks/useBlog";
import './MyBlog.css';

const MyBlog = () => {
    const {isAuthenticated} = useAuth();
    const {getMyBlogs} = useBlog();
    const [blogs, setBlogs] = useState([]);

    const load = async () => {
        const user = await isAuthenticated();

        if(user.status) {
            const res = await getMyBlogs(user.payload.id);
            console.log(res);
            setBlogs(res);
        }
    }

    useEffect(() => {
        load();
    }, []);
    return(
        <div className="my-blog-container">
            <div style={{display:'flex'}}>
                <div className="my-blog-metrics">
                <div className="my-blog-metrics-label">
                    <h1 className="border-bottom">Метрика</h1>
                </div>
                <div className="my-blog-metrics-items">
                    <div className="my-blog-metrics-item">
                        <img src="https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/paper_calligraphy_write_article-128.png"/>
                        <h1>10</h1>
                        <h3>Жазба</h3>
                    </div>
                    <div className="my-blog-metrics-item">
                        <img src="https://cdn2.iconfinder.com/data/icons/business-and-commercial-mixed-hexagone/128/20-128.png"/>
                        <h1>10</h1>
                        <h3>Пікір</h3>
                    </div>
                    <div className="my-blog-metrics-item">
                        <img src="https://cdn3.iconfinder.com/data/icons/basic-ui-texting/1600/massage_chatting_texting_likes-128.png"/>
                        <h1>10</h1>
                        <h3>Лайк</h3>
                    </div>
                </div>
            </div>
            <div className="my-blog-new-container">
                <h1>Жаңа жазба бастау</h1>
                <div className="my-blog-new-button">
                <NavLink to={'/myblog/new'}>
                        <img src="https://cdn3.iconfinder.com/data/icons/profession-8/128/10-128.png" />
                    </NavLink>
                    <div className="my-blog-new-button-btn">
                    <NavLink to={'/myblog/new'}>
                        +
                    </NavLink>
                    </div>
                </div>
            </div>
          </div>  
            <div className="my-blog-published-container">
                <h1 className="border-bottom">Менің жазбаларым</h1>
                <div className="my-blog-published-items-container">
                    {blogs && blogs.map((blog, key) => (
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
        </div>
    )
}

export default MyBlog;