
import "../css/register.css"

import { useState } from "react"
import axios from "axios";
const Register=()=>{
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [fullname,setFullname]= useState('');
    const [email,setEmail]= useState('');
    const [phone,setPhone]= useState('');
    const [location,setLocation]= useState('');
    const [bio,setBio]= useState('');
    const userRegister=(e)=>{
        e.preventDefault();// stops the page from being refresh
        // console.log("click");
        // const userData = {username,password,email};
        const userData = {username,password,fullname,email,phone,location,bio};
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



      

        // <div className="register">
        //     <div className="container">
        //         <div className="col-md-4">
        //             {username}
        //     <form>
        //         <div className="form-group">
                
        //             <label>Username</label>
        //             <input type="text" className="form-control"
        //             onChange={(e)=>setUsername(e.target.value)}
                    
        //             />
                
        //         </div>

        //         <div className="form-group">
                
        //             <label>Password</label>
        //             <input type="password" className="form-control"
        //             onChange={(e)=>setPassword(e.target.value)}
                    
        //             />
              
        //         </div>

        //         <div className="form-group">
                
        //             <label>Fullname</label>
        //             <input type="text" className="form-control"
        //              onChange={(e)=>setFullname(e.target.value)}
        //             />
                
        //         </div>

        //         <div className="form-group">
                
        //             <label>email</label>
        //             <input type="text" className="form-control"
                    
        //             onChange={(e)=>setEmail(e.target.value)}
        //             />
                
        //         </div>

        //         <div className="form-group">
                
        //             <label>phone</label>
        //             <input type="text" className="form-control"
        //              onChange={(e)=>setPhone(e.target.value)}
        //              />
                
        //         </div>
        //         <div className="form-group">
                
        //             <label>Location</label>
        //             <input type="text" className="form-control"
        //              onChange={(e)=>setLocation(e.target.value)}
        //              />

                
        //         </div>

        //         <div className="form-group">
                
        //             <label>bio</label>
        //             <input type="text" className="form-control"
        //              onChange={(e)=>setBio(e.target.value)}/>

                
        //         </div>
        //         <button type="submit" class="btn btn-primary" onClick={userRegister}>Submit</button>







        //     </form>
        //     </div>
        // </div>
        // </div>
    )
}
export default Register