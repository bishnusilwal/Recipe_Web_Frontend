
import "../css/register.css"

import { useState } from "react"
import axios from "axios";
const Register=()=>{
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [email,setEmail]= useState('');

    const userRegister=(e)=>{
        e.preventDefault();// stops the page from being refresh

        const userData = {username,password,email};
        axios.post("http://localhost:90/user/register", userData,{headers: { 'Content-Type': 'application/json'}})
        // console.log(userData);
        .then(result=>console.log(result))
        .catch(); 



    }

    return(
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." 
          onChange={(e)=>setUsername(e.target.value)}/>

        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." 
        onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." 
         onChange={(e)=>setPassword(e.target.value)}/>




        {/* <button className="registerButton">Register</button> */}
        <button type="submit" class="btn btn-registerButton" onClick={userRegister}>Submit</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>



      

     
    )
}
export default Register