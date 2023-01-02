import React, {useState} from 'react';
import { auth } from './firebase';
import "./Login.css";
import { login } from "./features/userSlice";
import { useDispatch } from 'react-redux';


function Login() {
const [email, setEmail]=useState("");
const [password, setPassword]=useState("");
const [name, setName]=useState("");
const [profpic,setProfpic]=useState("");
const dispatch =useDispatch();/*useDispatch is a new hook that dispatches an action into the store*/ 


    const loginToApp = (e) =>{
        e.preventDefault();  /*Authentification*/

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    };

    const register = () => {
        if (!name)
        {return alert ("please enter a name");}

        auth.createUserWithEmailAndPassword(email, password) /*creates a user on the back end*/ 
        .then((userAuth) => {     /* .then((userAuth) => means if create a user is successful it will update their profile*/ 
            userAuth.user.updateProfile({
                displayName:name, /*displayName  and photoURL are fire base keys and should not be changed but name and profpic are local variables */
                photURL:profpic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl:profpic
                    })
                )

            })
             
        
        })
        .catch((error) => alert(error));
    };
  return (
    <div className ="login" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZotcRT2l0Bze3QyLyBpeJMWNZyHPHZuy5_Q&usqp=CAU"
        alt=""/>

        <form>
            <input value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="full name" 
             type="text"/> 

            <input value={profpic}
            onChange={(e) => setProfpic(e.target.value)}
            placeholder= "picture" 
            type="text"/>

            <input value= {email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            />

            <input value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder= "password" 
            type="password"
            />

            <button type='submit' onClick={loginToApp}>sign in </button>

        </form>

        <p>Sign up?
            <span className="login_register" onClick={register}>     Register Now</span>

    
        </p>
    </div>
  )
}

export default Login;