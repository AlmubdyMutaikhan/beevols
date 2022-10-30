import axios from "axios"

const useGroup = () => {
    
    const getAllGroups = async () => {
        try {
            const groups = await axios.get('/group/all');
         //   console.log(groups);
            return groups.data.groups;
        } catch(err) {
            return err.response.data.err;
        }
    }

    const getOneGroup = async (id) => {
        try {
            const group = await axios.get('/group/' + id);
            return group.data.group;
        } catch(err) {
            return err.response.data.err;
        }
    }


    const checkLeader = async (gId, uId) => {
            const group = await getOneGroup(gId);

            if(group.admin === uId) {
                return {status:true};
            } else {
                return {status:false};
            }
    }


    const createNewGroup = async (data) => {
        try {
            const group = await axios.post('/group/new', data);
            return group.data.group;
        } catch(err) {
            return err.response.data.err;
        }
    }

    const requestToGroup = async (userID, adminID, groupID) => {
        try {
            const req = await axios.get('/group/add/request', { params : { userID, groupID, adminID  } })
            return req.data;
        } catch(err) {
            return err.response.data.err;
        }
    }

    const addToGroup = async (notURL) => {
        try {
            const req = await axios.get(notURL);
            console.log(req.data);
            return req;
        } catch(err) {
            console.log(err);
            return err.response.data;
        }   
    } 

    const createNewProject = async (data, groupID) => {
        try {
            const res = await axios.post('/group/'+groupID, {project : data});
            return res.data;
        } catch(err) {
            console.log(err);
            return err.response.data;
        }
    }

    const addToDo = async (groupID, projectID, todo) => {
        try {
            const res = await axios.post(`/group/project/${projectID}/todo`, {
                groupID,
                todo
            })

            return res.data;
        } catch(err) {
            console.log(err);
            return err.response.data;
        }
    }


    return {
        getAllGroups,
        getOneGroup,
        createNewGroup,
        requestToGroup,
        addToGroup,
        createNewProject,
        addToDo,
        checkLeader
    }
}


export default useGroup;