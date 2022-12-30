import React from 'react';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";


import './App.css';
import Header from './Header';

function App() {
  const user = useSelector(selectUser);
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
