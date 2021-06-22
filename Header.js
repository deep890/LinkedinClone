import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BuisnessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
import { logout } from './Features/UserSlice'
import { auth } from './firebase'
import {useDispatch} from 'react-redux'
 
function Header() {
    const dispatch = useDispatch()
    function LogoutOfApp(){
       
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className = "header">
            <div className = "header__left">
                <img src ="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo"/>
                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder = 'search' type='text'/>
                </div>
            </div>
            <div className = "header__right">
                <HeaderOption Icon = {HomeIcon} Title ='Home'/>
                <HeaderOption Icon = {SupervisorAccountIcon} Title ='My Network'/>
                <HeaderOption Icon = {BuisnessCenterIcon} Title ='Jobs'/>
                <HeaderOption Icon = {ChatIcon} Title ='Messaging'/>
                <HeaderOption Icon = {NotificationIcon} Title ='Notfication'/>
                <HeaderOption Avatar = {true} Title = "Me" onClick = {LogoutOfApp}/> 
               
            </div>
        </div>
    )
}

export default Header

// props 
