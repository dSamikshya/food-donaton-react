import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';

import ViewUser from './ViewUser';



const admin = () => {
  return (
      <>
      
    
      <Header/>
      <Sidebar/>
    
    
      
     
      <ViewUser/>
 
 
<Footer/>
     
      
    
        </>
  )
}

export default admin