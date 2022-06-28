import { useEffect, useState } from 'react';
import Containter from 'react-bootstrap/Container';
import Demo1LifeCycleChildComp from './01_child';
import './template.scss';


function Demo1LifeCycleComp() {

    useEffect(() => {
        
    }, [])

    const [userID, setUserID] = useState('');
    const [isClicked, setIsClicked] = useState('');
    const [current, setCurrent] = useState('');

    const getTasks = () => {
        setIsClicked(true);
        setUserID(current);
    }
    
    
    return ( <Containter>
        <input type="text" name="userID" id="userID" onChange={(e)=>{setCurrent(e.target.value)}} />
        <input type="button" value="show tasks" onClick={getTasks} />
        <ul>
        {
            isClicked &&
          
                <Demo1LifeCycleChildComp userID={userID}></Demo1LifeCycleChildComp>
           
        } 
        </ul>
    </Containter>);
}

export default Demo1LifeCycleComp;