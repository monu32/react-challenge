import React, { Component } from 'react'
import axios from 'axios'

import './user.css'

class User extends Component
{
    state =
    {
        user:""
    }

    componentDidMount()
    {
        this.getUser();
    }

    getUser = () =>{
        axios({
            method:'get',
            url:'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
        })
        .then(res=>
            {
                const users = res.data;
                const id = this.props.match.params.id;
                for(let index=0;index<users.length;index++){
                    if(users[index].id === id)
                    {
                        console.log(users[index])
                        this.setState({user : users[index]})
                        return;
                    }
                }
                alert("User not found !");
                this.props.history.push('/Home')
            })
        .catch(error=>{
            console.log("error");
            alert("User not found !");
            this.props.history.push('/Home')
        })
    }

    verifyDuplicate = (id,arr) =>{

        for(let i=0;i<arr.length;i++){
            if(arr[i].id===id)
                return {duplicate:true,status:arr[i].status};
        }
        return {duplicate:false};
    }

    shortlistedHandler = (user)=>{
        let userStatus = localStorage.getItem('userStatus');
        if(userStatus!==null && userStatus!==undefined){
            userStatus = JSON.parse(userStatus);
            const status = this.verifyDuplicate(user.id,userStatus)

            if(!status.duplicate)
                userStatus.push({...user,status:"shortlisted"});
            else
                alert("User is already "+status.status+"!");
        }
        else{
            userStatus = [{...user,status:"shortlisted"}];
        }
        localStorage.setItem('userStatus',JSON.stringify(userStatus))
        this.props.history.push('/Home')
    }

    rejectedHandler = (user)=>{
        let userStatus = localStorage.getItem('userStatus');
        if(userStatus!==null && userStatus!==undefined){
            userStatus = JSON.parse(userStatus);
            const status = this.verifyDuplicate(user.id,userStatus)

            if(!status.duplicate)
                userStatus.push({...user,status:"rejected"});
            else
                alert("User is already "+status.status+"!");
        }
        else{
            userStatus = [{...user,status:"rejected"}];
        }
        localStorage.setItem('userStatus',JSON.stringify(userStatus))
        this.props.history.push('/Home')
    }


    render()
    {
        return(
            <div id="user">
                <img id="image" src={this.state.user.Image}/>
                <p id="name">{this.state.user.name}</p>
                <div id="btn-section">
                    <button id="shortlisted" onClick={(user)=>this.shortlistedHandler(this.state.user)}>Shortlisted</button>
                    <button id="rejected" onClick={(user)=>this.rejectedHandler(this.state.user)}>Rejected</button>
                </div>
            </div>
        )
    }
}

export default User