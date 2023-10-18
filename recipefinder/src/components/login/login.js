// import React, {useState} from 'react'
// import "./login.scss"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// const Login=({setLoginUser})=>{
//     const navigate = useNavigate()
//     const [user,setUser]=useState({
//         email:"",
//         password:""

//     })
//     const handleChange = e =>{
//         const{name, value}=e.target;
//         console.log(name,value)
//         setUser({
//             ...user,
//             [name]:value
//         })
//     }


//     const login=()=>{
//         axios.post("http://localhost:9002/login", user)
//         .then(res=>{
//             alert(res.data.message)
//             setLoginUser(res.data.user)
//             // navigate(user.email && user.password ? "/Main": alert("Fill in the credentials to log in"))
//         })
//     }

//     //to navigate the login page to the register page
//     const load=()=>{
//         navigate("/register")
//     }
//     return(
//         <div className='login-container'>
//             <div className="mainimage"><img src="https://10tips.in/wp-content/uploads/2020/02/places-to-eat-in-noida-live-more-zone-dbs-1.jpg"/></div>
//             <div className="fontstyle">FlavorVerse</div>
//             <div className="login">
//                 {console.log(user)}
//                 <h1 className="font">Login</h1>
//                 <input type="text" name="email" value={user.name} placeholder="Enter your Email" onChange={handleChange}></input>
//                 <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
//                 <div className="button" onClick={login}>Login</div>
//                 <div>or</div>
//                 <div className="button" onClick={load}>Register</div>

//             </div>
//         </div>

//     )
// }
// export default Login

import React, { useState } from 'react'
import "./login.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom"
//import {useHistory} from "react-router-dom"
    
    const Login = ({ setLoginUser }) => {
        const navigate = useNavigate()
        const [user, setUser] = useState({
            email: "",
            password: ""

        })
        const handleChange = e => {
            const { name, value } = e.target;
            console.log(name, value)
            setUser({
                ...user,
                [name]: value
            })
        }


        const login = () => {
            axios.post("http://localhost:9002/login", user)
                .then(res => {
                    alert(res.data.message)
                    setLoginUser(res.data.user)
                    //axios.post("http://localhost:9002/default", user)
                    navigate("/login")
                }
                )
        }

        //to navigate the login page to the register page
        const load = () => {
            navigate("/register")
        }
        return (
            <div>
                <div className="mainimage"><img src="https://10tips.in/wp-content/uploads/2020/02/places-to-eat-in-noida-live-more-zone-dbs-1.jpg" /></div>
                <div className="fontstyle">FlavorVerse</div>
                <div className="login">
                    {console.log(user)}
                    <h1 className="font">Login</h1>
                    <input type="text" name="email" value={user.name} placeholder="Enter your Email" onChange={handleChange}></input>
                    <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
                    <div className="button" onClick={login} >Login</div>
                    <div>or</div>
                    <div className="button" onClick={load}>Register</div>

                </div>
            </div>

        )
    }

export default Login;