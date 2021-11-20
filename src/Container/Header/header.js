import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header=()=>
{
        return(
            <header className="header">                    
                        <Link className="header-item Link" to="/Home">Home</Link>
                        <Link className="header-item Link" to="/Shortlisted">Shortlisted</Link>
                        <Link className="header-item Link" to="/Rejected">Rejected</Link>
            </header>
    )
}

export default Header