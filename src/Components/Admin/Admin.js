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
import ViewDonation from './ViewDonation';



const admin = () => {
  return (
    <div className="Admin">
      
     {
    <>
    <Header/>
    <Sidebar/>
        <Routes>
        <Route  exact path="/"  element={<admin/>}/>
          <Route path="/viewuser" element={<ViewUser/>}/>
          <Route path="/viewdonation" element={<ViewDonation/>}/>
        </Routes>
     <Footer/>
    
     </>
    }
    </div>
  );
}

export default admin