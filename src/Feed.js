import React, {useEffect, useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css'
import ImageIcon from '@mui/icons-material/Image';
import InputOption from "./InputOption";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import {selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";


export default function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] =useState('');
    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>(/*this orders the posts*/ 
            setPosts(snapshot.docs.map(doc =>(  /* lines 18-27:This is a real-time listiner to firebase. This is mapped to the "posts" state so when new data is pushed to the data base it will update the posts state*/ 
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])


    const sendPost = e =>{          /*Lines 29-43 is pushing data to the database*/
        e.preventDefault();     /*this makes it so when you click enter after typing something it does not automatically reset*/
        
        
        db.collection('posts').add({    /* we are pushing to the posts we are actually listening to (see "posts" in line 19*/
            name:user.displayName,  /*these to lines take in the stuff from userSlice. Line 17 enables this*/ 
            description:user.email,
            message:input,
            photoLink: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),


        });
        setInput("");
    
    }; 


  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className= "feed_input">
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>     {/*This handles what you type in. It also connects to line 37*/}
                    <button onClick={sendPost} type="submit">Send
                    </button>

                </form>
            </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title= "Photo"
                    color="#70B5F9"/>

                    <InputOption Icon={SubscriptionsIcon} title= "Video"
                    color="#70B5F9"/>

                    <InputOption Icon={EventNoteIcon} title= "Event"
                    color="#70B5F9"/>

                    <InputOption Icon={CalendarViewDayIcon} title= "Write Post"
                    color="#70B5F9"/>


                </div>
        </div>

        <FlipMove>
            {posts.map(({id, data:{name, description, message, photoLink}})=>(
            
             <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoLink={photoLink}
            
            />))}

        </FlipMove>

    </div>
  )
}
