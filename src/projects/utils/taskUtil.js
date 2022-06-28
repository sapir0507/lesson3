import axios from 'axios';

const url ='https://jsonplaceholder.typicode.com/todos/';

const getTasksDetails = (id) => { 
    return axios.get(url+`?userId=${id}`) 
}

const getTaskLimitedTitle = async(id, limit) => { 
    let resp =  await getTasksDetails(id);
    let data = resp.data;
    console.log(data);
    let tasks = data.splice(0, limit);
    let finalTasks = tasks.map((task)=>{
        return task.title;
    })
    return finalTasks;
}


const taskUtil = {
    getTaskLimitedTitle
}

export default taskUtil;