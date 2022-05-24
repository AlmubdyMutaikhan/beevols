import axios from "axios";
import { useEffect, useState } from "react"

const useFindUser = () => {
    const [user, setUser] = useState(null);
    
    const retrieveUserData = async () => {
            const token = localStorage.getItem('token');
            if(!token || token === null || token === undefined || token === '') { return false; }
            
            try {
                const status = await axios.get('/auth/payload', {params : { token }});
                
                if(status.data.msg === 'ok' && status.data.payload) {
                    setUser({status : true, payload : status.data.payload});
                } else {
                    setUser({status : false, payload : null});
                }
            } catch(err) {
                console.log(err);
                localStorage.removeItem('token');
                window.location.reload();
                setUser({status : false, payload : null});
            }
    }

    useEffect(() => {
        retrieveUserData();
    }, []);

    return {
        user,
        setUser
    }
}

export default useFindUser;