import axios from 'axios';

const url ='https://jsonplaceholder.typicode.com/users/'

const getUserDetails = (id) => { return axios.get(url+id) }

const getEmail = async(id) => { 
    let resp =  await getUserDetails(id)
    let data = resp.data;
   
    return data.email;
}

const getUsername = async (id) => { 
    let resp =  await getUserDetails(id)
    let data = resp.data;
    return data.username; 
}

const updateUser = (id, data) => {
    axios.patch(url+id, data);
}


const userUtil = {
    getUserDetails,
    updateUser,
    getEmail,
    getUsername
}

export default userUtil;