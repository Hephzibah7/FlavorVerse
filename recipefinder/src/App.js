import React, {useState}from 'react'
import './App.css';
import Main from './components/homepage_final/Main';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import ChefForm from './components/ChefForm/ChefForm';
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

        {/* Defining the paths of various files */}
          <Route exact path="/" element={<Homepage />}  />
<<<<<<< Updated upstream
          <Route path="/login" element={user && user._id ? <Main/>:<Login setLoginUser={setLoginUser}/>}  />
=======
          {/* <Route path="/default" element={user && user._id ? <Main/>:<Login setLoginUser={setLoginUser}/>}  /> */}
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
>>>>>>> Stashed changes
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/Main" element={<Main/>} />
          <Route exact path="/ChefForm" element={<ChefForm/>} />
        </Routes>
       </Router>
    </div>
     
  );
}

export default App;
