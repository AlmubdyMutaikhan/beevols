import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from './UserContext';

export default function useAuth( setLoading, setMessage, setStatus ) {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const setUserContext = async () => {
        
        const token = localStorage.getItem('token');
        if(!token || token === null || token === undefined || token === '') {  setUser(null); }
            
        try {
            const status = await axios.get('/auth/payload', {params : { token }});
            console.log(status);
            if(status.data.msg === 'ok' && status.data.payload) {
            
                setUser({status : true, payload : status.data.payload});
            } else {
                    setUser(null);
            }
        } catch(err) {
            console.log(err);
            setUser(null);
        }
    }

    const signUpUser = async ({email, fname, sname, password}) => {
        try {
            setLoading(true);
            const userData = await axios.post('/auth/signup', {email, fname, sname, password});
            localStorage.setItem('token', userData.data.token);

            setLoading(false);
            setMessage("Алақай! Сәтті тіреклу");
            setStatus('ok');
            
            setTimeout(async () => {
                await setUserContext();
                navigate('/');
            }, 500);
            return true;
        } catch(err) {
            setMessage(err.response.data.error);
            setLoading(false);
            setStatus('nok');
            throw new Error('smth went wrong...');
        }
    }

    const isAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if(!token || token === null || token === undefined || token === '') { return false; }
        
        try {
            const status = await axios.get('/auth/payload', {params : { token }});
            if(status.data.msg === 'ok' && status.data.payload) {
                return {status : true, payload : status.data.payload};
            } else {
                return {status : false, payload : null};
            }
        } catch(err) {
            console.log(err);
            return {status : false, payload : null}
        }
    }



    const signInUser = async ({email, password}) => {
        try {
            setLoading(true);
            const user = await axios.post('/auth/signin', {email, password});
            localStorage.setItem('token', user.data.token);
            setLoading(false);
            setMessage("Сәтті авторизация!");
            setStatus('ok');

            setTimeout(async () => {
                await setUserContext();
                navigate('/');
            }, 500);

            return true;
        } catch(err) {
            console.log(err);
            setMessage(err.response.data.error);
            setLoading(false);
            setStatus('nok');
            throw new Error('smth went wrong...');
        }
    }

    const signoutUser = async () => {
        localStorage.removeItem('token');
        await setUserContext();
        navigate('/');
    } 


    return {
        isAuthenticated,
        signUpUser,
        signInUser,
        signoutUser,
        setUserContext
    }
}