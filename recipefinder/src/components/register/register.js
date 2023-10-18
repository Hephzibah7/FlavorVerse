// import React, {useState}from 'react'
// import "./register.scss"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"


// const Register = () => {
//     const [user,setUser]=useState({
//         name:"",
//         email:"",
//         password:"",
//         reEnterPassword:""

//     })
//     const navigate = useNavigate()

//     const handleChange = e =>{
//         const{name, value}=e.target;
//         console.log(name,value)
//         setUser({
//             ...user,
//             [name]:value
//         })
//     }
    
//     const register =()=>{
//         const{ name, email, password, reEnterPassword}=user
//         if(name && email && password && (password===reEnterPassword)){
//             axios.post("http://localhost:9002/register",user)
//             .then(res=> console.log(res))
//             alert("Registration Successful")
//         }
//         else{
//             alert("Invalid details")
//         }
//     }

//     //to navigate the register page to the login page
//     const load=()=>{
//         navigate("/login")
//     }
//     return (
//         <div>
//         <div className="mainimage"><img src="https://10tips.in/wp-content/uploads/2020/02/places-to-eat-in-noida-live-more-zone-dbs-1.jpg"/></div>
//         <div className="fontstyle">FlavorVerse</div>
//         <div className="register">
//             <h1 className="font">Register</h1>
//             <input type="text" name="name" value={user.name} placeholder="UserName" onChange={handleChange}></input>
//             <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
//             <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
//             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter your Password" onChange={handleChange}></input>
//             <div className="button" onClick={register}>Register</div>
//             <div>or</div>
//             <div className="button" onClick={load}>Login</div>
//         </div>
//         </div>
    
//     )
// }
// export default Register

import React, {useState}from 'react'
import "./register.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""

    })
    const navigate = useNavigate()

    const handleChange = e =>{
        const{name, value}=e.target;
        console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })
    }
    
    const register =()=>{
        try{
        const{ name, email, password, reEnterPassword}=user
        if(name && email && password && (password===reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            .then(res=> console.log(res))
            alert("Registration Successful")
        }
        else{
            alert("Invalid details")
        }
    }
catch(error){
    console.log(error.response.data.error)
}
    }

    //to navigate the register page to the login page
    const load=()=>{
        navigate("/login")
    }
    return (
        <div>
        <div className="mainimage"><img src="https://10tips.in/wp-content/uploads/2020/02/places-to-eat-in-noida-live-more-zone-dbs-1.jpg"/></div>
        <div className="fontstyle">FlavorVerse</div>
        <div className="register">
            <h1 className="font">Register</h1>
            <input type="text" name="name" value={user.name} placeholder="UserName" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={load}>Login</div>
        </div>
        </div>
    
    )
}
export default Register
