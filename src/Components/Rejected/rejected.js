import React from 'react';
import Usercontent from '../Usercontent/usercontent';
import './rejected.css'

const Rejected=()=>
{
    let users=[];
    let userStatus = localStorage.getItem('userStatus');
    if(userStatus!==null && userStatus!==undefined){
        userStatus = JSON.parse(userStatus);

        for(let i=0;i<userStatus.length;i++){
            if(userStatus[i].status === "rejected")
                users.push(userStatus[i])
        }
    }
    
    return (
        <div>
            <p className="heading">Rejected Users</p>
            <Usercontent users={users}/>
        </div>
    )
}

export default Rejected