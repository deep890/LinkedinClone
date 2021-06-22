import React, {useEffect} from 'react';

import './App.css';
import {login,logout,selectUser} from './Features/UserSlice'
import {useDispatch, useSelector} from 'react-redux';
import Feed from './Feed';
import Header from './Header'
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login';
import { auth } from './firebase';

function App() {
const user = useSelector(selectUser)
 const dispatch = useDispatch()
 useEffect(() => {
   auth.onAuthStateChanged(userAuth =>{
     if(userAuth){
      //  logged in
      dispatch(login({
        email : userAuth.user.email,
        uid : userAuth.user.uid,
        //  uid is the is of user
        displayName : userAuth.user.displayName,
        profileURL : userAuth.user.photoURL
    }))
     }
     else{
      //  logged out
      dispatch(logout())
     }
   })
  
   
 })

  return (
    <div className="app">
      
      <Header/>{
        !user ? (  <Login /> ) : (  <div className = "app__body">
        <Sidebar/>
        <Feed/>
        <Widgets />
        </div>)
      }
    
    
    </div>
  );
}

export default App;
