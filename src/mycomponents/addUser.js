


import "../css/addUser.css"

import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import * as React from "react";

const Adduser=()=>{
 
    const [fullname,setFullname]= useState('');
    const [phone,setPhone]= useState('');
    const [location,setLocation]= useState('');
    const [bio,setBio]= useState('');
  

    const config={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token'),
        }
    }



        const addUser=(e)=>{
            e.preventDefault();
     
            const userData = {
                fullname, phone,location,bio
            }


        axios.put("http://localhost:90/user/",userData,config)
        .then(result111=>{
            console.log(result111)

           
        })
        
        .catch();
    }

    
    


    return(



    <div className="adduser">
      <span className="userTitle">Update Your Profile</span>
      <form className="userForm">
        <label className="Txinput">Fullname</label>
        <input className="userInput" type="text"
          onChange={(e)=>setFullname(e.target.value)}/>

     
        <label className="Txinput">Phone</label>
        <input className="userInput" type="text"
         onChange={(e)=>setPhone(e.target.value)}/>


<label className="Txinput">Location</label>
        <input className="userInput" type="text" 
          onChange={(e)=>setLocation(e.target.value)}/>

<label className="Txinput">Bio</label>
        <input className="registerInput" type="text"
          onChange={(e)=>setBio(e.target.value)}/>






      
        <button type="submit" class="RSButton" onClick={addUser}>Submit</button>
      </form>
      
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
export default Adduser;