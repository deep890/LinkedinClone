import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebar__top">
                <img src = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                <Avatar className = "sidebar__avatar">
                    {/* user email */}
                </Avatar>
                <h2>Deepti Maheshwari </h2>
                <h4>asd@gmail.com</h4>


                </div>
                <div className= "sidebar__stats">
                   <div className = "sidebar__stat">
                   <p>who viewed you</p>
                    <p className = "sidebar__statNum">252,552</p>
                   </div>
                   <div className = "sidebar__stat">
                    <p>Views on post</p>
                    <p className = "sidebar__statNum">456</p>
                    </div>

                </div>
                <div className = "sidebar__bottom">
                    <p>Recent</p>

                    React js
                    node 
                </div>

        </div>
    )
}

export default Sidebar
