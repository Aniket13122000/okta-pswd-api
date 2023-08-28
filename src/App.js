import logo from './logo.svg';
import './App.css';
import Take_id from './component/Take_id';
import Take_pswd from './component/Take_pswd';
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Take_id />} />
    <Route path='/getpswd' element={<Take_pswd/>}/>
     </Routes>
    </div>
  );
}

export default App;
