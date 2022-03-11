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
function App() {
  return (
    <div className="App">
      
     {
      
    
    
     <Router>
    
        <Routes>
          
          <Route path="/admin/*" element={<Admin/>}/>
          <Route  exact path="/" element={<Home/>}/>
          <Route path="/viewuser" element={<ViewUser/>}/>
        </Routes>
     
    </Router> 
    }
    </div>
  );
}

export default App;
