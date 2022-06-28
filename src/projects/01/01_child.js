/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import taskUtil from '../utils/taskUtil';
import './template.scss';


function Demo1LifeCycleChildComp({userID}) {  

    const [tasks, setTasks] = useState([]);

    const tasksCallback = useCallback(()=>{
        const Tasks = async ()=>{
            let tasks = await taskUtil.getTaskLimitedTitle(userID, 5);
            setTasks(tasks);
        }
        Tasks().catch(console.error)
    },[userID])

    
    
    useEffect( () => {
        tasksCallback()
    }, [userID, tasksCallback])   
    
    return ( <div>
        {tasks && tasks.map((taskTitle, index)=>{return <li key={index}>{taskTitle}</li>})}
    </div>
  );
}

export default Demo1LifeCycleChildComp;