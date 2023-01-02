import React, {useEffect } from 'react'; 
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

import './App.css';
import Header from './Header';

function App() {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        /*user is logged in */
        dispatch(login({
          email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl:userAuth.photoURL,
        }))
      } else {
        /*user is logged out*/ 
        dispatch(logout());
      }
    })  /* a listener that listens to authentification change */
  }, [dispatch])   

  return (
    <div className="app">
     
      < Header/>

        {!user ? ( <Login />) 
        : (
          <div className="app_body">
        
            < Sidebar/>
            <Feed/>
    
          </div>
        )
      
      
      }




     
     {/* Gidgets*/} 

    </div>
  );
}

export default App;
