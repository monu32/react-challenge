import React, { Component } from 'react';
import {Route, Redirect,Switch} from 'react-router-dom'

import Header from '../Header/header'
import Home from '../../Components/Home/home'
import User from '../../Components/User/user'
import Shortlisted from '../../Components/Shortlisted/shortlisted';
import Rejected from '../../Components/Rejected/rejected';

class Layout extends Component
{
    render()
    {
        let content = null;
        content=(
            <Switch>            
                <Route path="/Home" exact component={()=><Home posts={this.props.users}/>}/>
                <Route path="/Shortlisted" exact component={Shortlisted}/>
                <Route path="/Rejected" exact component={Rejected}/>            
                <Route path="/:id" exact component={User} />
                <Redirect to="/Home"/>
            </Switch>
        )

    return(
        <div>
            <Header/>
            {content}
        </div>
    )
    }
}


export default Layout