import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';

import Body from './Components/Admin/Body';
import Admin from './Components/Admin/Admin'
import Sidebar from'./Components/Admin/Sidebar';
import Header from "./Components/Page/Header";
import Home from "./Components/Page/Home";
import ViewUser from "./Components/Admin/ViewUser";
import ViewDonation from "./Components/Admin/ViewDonation";
import ViewRequest  from "./Components/Admin/ViewRequest";
import ViewEvent from "./Components/Admin/ViewEvent";
import Volunteer from "./Components/Admin/Volunteer";
import AddUser from "./Components/Admin/AddUser";
function App() {
  return (
    <div className="App">
      
     {
      
    
    
     <Router>
    
        <Routes>
          
          <Route path="/admin/*" element={<Admin/>}/>
          <Route  exact path="/" element={<Home/>}/>
          <Route path="/viewuser" element={<ViewUser/>}/>
          <Route path="/viewdonation" element={<ViewDonation/>}/>
          <Route path="/viewrequest" element={<ViewRequest/>}/>
          <Route path="/viewevent" element={<ViewEvent/>}/>
          <Route path="/volunteer" element={<Volunteer/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          
          



        </Routes>
     
    </Router> 
    }
    </div>
  );
}

export default App;
