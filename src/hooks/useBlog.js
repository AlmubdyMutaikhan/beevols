import axios from "axios"

const useBlog = () => {
    const getMyBlogs = async (id) => {
        try {
            const blogs = await axios.get('/user/blog/all', {params : { id }});
            return blogs.data.blogs;
        } catch(err) {
            return err.response.data.err;
        }
    }

    const postMyBlog = async (data) => {
        try {
            const res = await axios.post('/blog/new', data);
            return res.data;
        } catch(err) {
            return err.response.data.err;
        }
    }

    const postMyPost = async (data) => {
        try {
            const res = await axios.post('/blog/post', data);
            return res.data;
        } catch(err) {
            return err.response.data.err;
        }
    }

    const getBlog = async (id) => {
        try {
            const blog = await axios.get('/blog/'+id);
            console.log(blog);
            return blog.data.blog;
        } catch(err) {
            return err.response.data.err;
        }
    }

    const postComment = async (blogID, id, comment) => {
        try {
            const res = await axios.post('/blog/'+blogID+'/comment', {
                comment : comment,
                senderID : id
            }) 
            console.log('res is here', res);
            return "ok";
        } catch(err) {
            return err.response.data.err;
        }
    }

    const postLike = async (blogID) => {
        try {
            const res = await axios.post('/blog/'+blogID+'/like'); 
            return "ok";
        } catch(err) {
            return err.response.data.err;
        }
    }

    return {
        getMyBlogs,
        postMyBlog,
        getBlog,
        postComment,
        postLike,
        postMyPost
    }
}


export default useBlog;