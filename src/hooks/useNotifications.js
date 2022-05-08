import axios from "axios";

const useNotification = () => {
    
    const loadNotifications = async (id) => {
        try {
            const res = await axios.get('/user/notifications', {params : {id}});
            return res.data.notifications;
        } catch(err) {
            return err.response.data;
        }
    }
    
    return {
        loadNotifications
    }
}

export default useNotification;