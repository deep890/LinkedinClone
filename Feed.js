import { Avatar } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import './Feed.css';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import { selectUser } from './Features/UserSlice';
import { db } from './firebase';
import firebase from 'firebase';
import Post from './Post'
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser)
  const [input,setInput] = useState('')
  const [posts,setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapShot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({
        id:doc.id,
        data:doc.data()
      })))
    )
    
  }, [])
  const sendPost = (e) =>{
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description : user.email,
      messgae:input,
      photoUrl:user.photoUrl,
      timestamp: firebase.firebase.FieldValue.serverTimeStamp()
    })
    setInput('');
  }
    return (
        <div className = "feed">
            <div className = "feed__inputContainer">
                <div className = "feed__Input">
                <Avatar src = {user?.photoUrl}>
                  {user?.email[0]}
                </Avatar>
                <CreateIcon className = "feed__Icon"/>
                <form>
                    <input value ="" type ="text"/>
                    <button type = "submit">Send</button>
                </form>
                </div>

            </div>
            <div className = "feed__inputOptions">

        <InputOption Icon={ImageIcon} title='Photo' color="#7085F9"/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
          <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
            </div>
            <FlipMove>
      {posts.map(({id, data: { name, description, message, photoUrl}})=>(
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        /> 
      ))}
      </FlipMove>

        </div>
        
    )
}

export default Feed
