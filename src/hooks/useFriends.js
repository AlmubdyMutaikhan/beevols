import axios from "axios";

const useFriends = () => {
    
    const requestFriend = async (userID, friendID) => {
        try {
            await axios.post('/user/friends', { userID, friendID });
            return 'ok';
        } catch(err) {
            return err.response.data;
        }
    }
    
    const readFriendMsg = async (link, notID) => {
        try {
            await axios.get('/user'+link, {params : {notID}});
            return 'ok';
        } catch(err) {
            return err.response.data;
        }
    }


    const getAllFriends = async (id) => {
        try {
            const res = await axios.get('/user/friends', {params : {id}});
            return res.data.friends;
        } catch(err) {
            return err.response.data;
        }
    }
    return {
        requestFriend,
        readFriendMsg,
        getAllFriends
    }
}

export default useFriends;