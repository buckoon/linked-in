import React from 'react'
import "./Sidebar.css"
import { Avatar} from '@mui/material';
import { useSelector } from 'react-redux';
import {selectUser } from "./features/userSlice";


function Sidebar() {

        const user = useSelector(selectUser);

    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>

    </div>
    );
       
    
        

    

  return (
    <div className= "Sidebar">
        <div className= "sidebar_top">
            <img src={"https://img.rawpixel.com/private/static/images/website/2022-05/sk9791-image-kwvuja96.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=13500e5125cd13300ba36ed88517f83e"}
            alt=""/>
        <Avatar className= 'sidebar_avatar' src={user.photoUrl} />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

    
        <div className="sidebar_stats">
            <div className="sidebar_stat">
            <p>Profile views today:</p>
            <p className="sidebar_statnumber">34</p>
            </div>
            
            <div className="sidebar_stat">
                <p>Post interactions</p>
                <p className="sidebar_statnumber">93</p>
            </div>

        </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('Design')}
                {recentItem('Engineering')}
            </div>
    </div>
  )
}

export default Sidebar;