import React from 'react';
import {Link} from 'react-router-dom'
import './usercontent.css'

const Usercontent=(props)=>
{
    const users = props.users;
    console.log(users)
    const content=users.map(user=>(
        <div key={user.id} className="user-outer">
            <Link className="Link"
            to={{
                pathname: "/"+user.id,
                }}
            >
            <div key={user.id} className="user-inner">
                <img className="image" src={user.Image} alt="Not found" />
                <p className="name">{user.name}</p>
            </div>
            </Link>
        </div>
    ));

    return (
        <div className="users">
            {content}
        </div>
    )
}

export default Usercontent