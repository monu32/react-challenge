import React from 'react';
import Usercontent from '../Usercontent/usercontent';
import './shortlisted.css'

const Shortlisted=()=>
{
    let users=[];
    let userStatus = localStorage.getItem('userStatus');
    if(userStatus!==null && userStatus!==undefined){
        userStatus = JSON.parse(userStatus);

        for(let i=0;i<userStatus.length;i++){
            if(userStatus[i].status === "shortlisted")
                users.push(userStatus[i])
        }
    }
    
    return (
        <div>
            <p className="heading">Shortlisted Users</p>
            <Usercontent users={users}/>
        </div>
    )
}

export default Shortlisted