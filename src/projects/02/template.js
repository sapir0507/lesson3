/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Containter from 'react-bootstrap/Container';
import userUtil from '../utils/userUtil';
import './template.scss';

function Demo2LifeCycleComp() {

    const [id, setId] = useState('')
    const [click, setClicked] = useState('')


    
    const [details, setDetails] = useState({ name: '', email: ''})

    const getUsernameAndFunction = async() => {
        setClicked(true)
        let username = await userUtil.getUsername(id)
        let email = await userUtil.getEmail(id)
       
        setDetails({...details,
            name: username,
            email: email
        })
        
    }

    const updateData = (e) =>{
        e.preventDefault();
        console.log(details)
        userUtil.updateUser(id, details);
    }
    
    return ( <Containter>
        <div>
            User ID: <input type="text" name="userid" id="userid" onChange={(e)=>{setId(e.target.value)}}/>
            <input type="button" value="GetData" onClick={()=>{getUsernameAndFunction()}}/>
        </div>
        
        <div className='my-5'>
            <form onSubmit={(e)=>{updateData(e)}}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Name: 
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="" 
                                    id="" 
                                    value={details.name} 
                                    onChange={(e)=>{
                                        setDetails({...details, name: e.target.value})
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email: 
                            </td>
                            <td>
                            <input 
                                type="text" 
                                name="" 
                                id="" 
                                value={details.email} 
                                onChange={(e)=> {
                                    setDetails({...details, email: e.target.value})
                                }}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                           
                            <td><div><input type="submit" value="update" className='updateBTN'/></div></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </Containter>);
}

export default Demo2LifeCycleComp;