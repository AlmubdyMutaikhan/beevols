import axios from "axios"

const useEvent = (setLoading, setMessage) => {
    const postEvent = async ({is, gId}) => {
        try {
            setLoading(true);
            const event = await axios.post('/event/new', {
                is, gId
            })
            
            setMessage('Іс-шара сәтті жарияланды')
            return event.data;
        } catch(err) {
            setMessage('Упс.. қайта байқап көріңіз')
            return err.response.data.err;
        }
    }

    const getEvents = async (gId) => {
        try {
       
            const events = await axios.get(`/event/${gId}/all`);
            
            return events.data.events;
        } catch(err) {
            
          
            return err.response.data.err;
        }
    }

    const getAll = async () => {
        try {
            const events = await axios.get('/event/all');
            return events.data.ises;
        } catch(err) {
            return err.response.data.err;
        }
    }


    const deleteEvent = async (gId, evId) => {
        try {
            setLoading(true);
            await axios.delete(`/event/${gId}/${evId}`);
            setLoading(false);
            setMessage('Сәтті түрде іс-шара өшірілді');
        } catch(err) {
            setMessage('Упс, қайта көріңіз')
            setLoading(false);
            return err.response.data.err;
            
        }
    }
    return {
        postEvent,
        getEvents,
        getAll,
        deleteEvent
    }
}


export default useEvent;