import React,{useState} from 'react'
import './Login.css'
import {auth} from './firebase'
import {useDispatch} from 'react-redux' 
import {login} from './Features/UserSlice'




function Login() {
const [name, setName] = useState("");
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");
const [profilePic, setProfilePic] = useState("");
const dispatch = useDispatch();

const loginToApp = (e) =>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(
        userAuth =>{
            // dispatch
            // hooks
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                //  uid is the is of user
                displayName : userAuth.user.displayName,
                profileURL : userAuth.user.photoURL
            }))

        }
    )

    .catch(error =>alert(error))
 
}
const register = () =>{
    if(!name){
        return alert('pls enter your full name')
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then(
        userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL : profilePic
            })
            .then(()=>{
                dispatch(login({
                    email : userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName :name,
                    profileURL : profilePic
                    
                }))
            })
        }
    ).catch(error => alert(error))
}

    return (
        <div className = "login">
            <img src ="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt = "logo"/>
            <form>
                <input type= "text" placeholder = "fullname" value = {name} onChange = { (e) =>setName(e.target.value)}/>
                <input type= "email" placeholder = "email address" value = {email} onChange = { (e) =>setName(e.target.value)}/>
                <input type= "password" placeholder = "password" value = {password} onChange = { (e) =>setName(e.target.value)}/>
                <input type= "text" placeholder = "profile pic (optional)" value = {profilePic} onChange = { (e) =>setName(e.target.value)}/>
                <button type= "submit" onClick = {loginToApp}>Sign In</button>
                
            </form>
            <p>Not a member ?
                <span className = "login__register" onClick = {register}>Register now</span>
            </p>
            
            
        </div>
    )
}

export default Login
