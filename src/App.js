import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';

import Admin from './Components/Admin/Admin';
function App() {
  return (
    <div className="App">
      
      <Router>
    
        <Routes>
          <Route path="/admin/*" element={<Admin/>}/>
            
          
        </Routes>
     
    </Router>
    </div>
  );
}

export default App;
