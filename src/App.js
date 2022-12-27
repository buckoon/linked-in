import React from 'react';
import Sidebar from "./Sidebar"
import Feed from "./Feed"


import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
     
      < Header/>
      <div className="app_body">
        
      < Sidebar/>
      <Feed/>

      </div>

     
     {/* Gidgets*/} 

    </div>
  );
}

export default App;
