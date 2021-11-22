import React, { Component } from 'react';
import axios from 'axios'
import Usercontent from '../Usercontent/usercontent';
import './home.css'

class Home extends Component
{
    state = 
    {
        users : [],
        permanentUsers : [] //to keep actual data in the list in case users list get updated while searching
    }
    componentDidMount(){
        this.getUserData();
    }
    
    getUserData = ()=>
    {
        axios({
            method:'get',
            url:'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
        })
        .then(res=>
            {
                const users=res.data;   
                this.setState({users})
                this.setState({permanentUsers:users})
            })
        .catch(error=>{
            // console.log("error")
        })
    }

    searchUser = (event) =>{
        let searchterm = event.target.value;
        searchterm = searchterm.toLowerCase();
        let users = [...this.state.permanentUsers];

        let filter=[];
        for(let i=0;i<users.length;i++){
            if(users[i].name.toLowerCase().includes(searchterm))                
                filter.push(users[i]);
        }
        this.setState({users:filter})
    }

    render(){            
        return(
            <div>
                <input type="search" id="searchInput" placeholder="Search user..." onChange={this.searchUser}/>
                <Usercontent users={this.state.users}/>
            </div>
        )    
    }
}


export default Home