import axios from "axios";
import { useContext } from "react"
import {UserContext} from './UserContext';

const useUser = () => {
    const {user} = useContext(UserContext);
    
    const updateUser = async (id, data) => {
        try {
            const res = await axios.put('/user', { id: id , user : data })
            return res;
        } catch(err) {
            throw new Error(err.response.data.err);
        }
    }

    const getUser = async (id) => {
        try {
            const user = await axios.get('/user', {params : {id:id}});
            return user.data;
        } catch(err) {
            throw new Error(err.response.data.err);
        }
    }


    const getAllUsers = async () => {
        try {
            const res = await axios.get('/user/all');
            return res.data;
        } catch(err) {
            throw new Error(err.response.data);
        }
    }
    return {
        updateUser,
        getUser,
        getAllUsers
    }
}

export default useUser;