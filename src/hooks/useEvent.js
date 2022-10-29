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

    return {
        postEvent,
        getEvents
    }
}


export default useEvent;