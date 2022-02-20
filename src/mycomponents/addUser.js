// import { Component } from "react/cjs/react.development";
// class Adduser extends Component{
//     render(){
//         return(
//             <div>This is adduser page content...</div>
//         )
//     }
// }
// export default Adduser;


import "../css/addUser.css"

import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import * as React from "react";

const Adduser=()=>{
    // const [username,setUsername]= useState('');
    // const [password,setPassword]= useState('');
    const [fullname,setFullname]= useState('');
    // const [email,setEmail]= useState('');
    const [phone,setPhone]= useState('');
    const [location,setLocation]= useState('');
    const [bio,setBio]= useState('');
    // const [uimg,setUimg]=useState(null);

    const config={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token'),
        }
    }

    // const addUser=(e)=>{
    //     e.preventDefault();
        // const recipeData={
        //     name,description,pretime,cooktime,totaltime,category,ingredients,direction
        // }

        // const userData=new FormData();
        // userData.append('fullname',fullname);
        // userData.append('email',email);
        // userData.append('phone',phone);
        // userData.append('location',location);
        // userData.append('bio',bio);
        // userData.append('recipe_image',uimg);


        const addUser=(e)=>{
            e.preventDefault();
     
            const userData = {
                fullname, phone,location,bio
            }


        axios.put("http://localhost:90/user/",userData,config)
        .then(result111=>{
            console.log(result111)

            // if(result111.data.success){
            //     setmessage('recipe inserted succesfully!!');
            // }
           
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

        {/* <label>Email</label>
        <input className="userInput" type="text" placeholder="Enter your email..." 
        onChange={(e)=>setEmail(e.target.value)}/> */}
        <label className="Txinput">Phone</label>
        <input className="userInput" type="text"
         onChange={(e)=>setPhone(e.target.value)}/>


<label className="Txinput">Location</label>
        <input className="userInput" type="text" 
          onChange={(e)=>setLocation(e.target.value)}/>

<label className="Txinput">Bio</label>
        <input className="registerInput" type="text"
          onChange={(e)=>setBio(e.target.value)}/>


{/* <div className="form-group">

<label>User Image</label>
<input type="file" className="form-control"
onChange={e=>setUimg(e.target.files[0])}

/>
</div> */}




        {/* <button className="registerButton">Register</button> */}
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