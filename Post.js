import { Avatar } from '@material-ui/core'
import React,{forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
// import ThumbsUpAltOutlinedIcon from '@material-ui/icons/ThumbsUpAltOutlined'


const Post =forwardRef(({name,description, message,photoUrl},ref) => {
    return (
        <div className = "post" ref = {ref}>
            <div className = "post__header">
                <Avatar src = {photoUrl}>{name [0]}</Avatar>
                <div className = "post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
            <div className = "post__body">
                <p>{message}</p>
            </div>
            <div className = "post__buttons">
                {/* input option */}
            <InputOption Icon={ChatOutlinedIcon} title='Like' color="grey"/>
          <InputOption Icon={ChatOutlinedIcon} title='Comment' color="grey"/>
          <InputOption Icon={ShareOutlinedIcon} title='Share' color="grey"/>
          <InputOption Icon={SendOutlinedIcon} title='Send' color="grey"/>
            </div>
        </div>
    )
})

export default Post
