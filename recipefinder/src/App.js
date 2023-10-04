import React, {useState}from 'react'
import './App.css';
import Main from './components/homepage_final/Main';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[user, setLoginUser]=useState({
    name:"",
    email:"",
    password:""

  })
  return (
    <div className="App">
       <Router>
        <Routes>
        {/* <Route path="/" element={user && user._id ? <Homepage/>:<Login setLoginUser={setLoginUser}/>}  /> */}

        {/* Defining the paths of various files */}
          <Route exact path="/" element={<Homepage />}  />
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/Main" element={<Main/>} />
        </Routes>
       </Router>
    </div>
     
  );
}

export default App;
