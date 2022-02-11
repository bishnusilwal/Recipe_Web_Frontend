// import { Component } from "react/cjs/react.development";
// class Adduser extends Component{
//     render(){
//         return(
//             <div>This is adduser page content...</div>
//         )
//     }
// }
// export default Adduser;




import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import * as React from "react";

const Adduser=()=>{
    // const [username,setUsername]= useState('');
    // const [password,setPassword]= useState('');
    const [fullname,setFullname]= useState('');
    const [email,setEmail]= useState('');
    const [phone,setPhone]= useState('');
    const [location,setLocation]= useState('');
    const [bio,setBio]= useState('');
    const [uimg,setUimg]=useState(null);

    const config={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token'),
            "Content-Type": "multipart/form-data"
        }
    }

    const addUser=(e)=>{
        e.preventDefault();
        // const recipeData={
        //     name,description,pretime,cooktime,totaltime,category,ingredients,direction
        // }

        const userData=new FormData();
        userData.append('fullname',fullname);
        userData.append('email',email);
        userData.append('phone',phone);
        userData.append('location',location);
        userData.append('bio',bio);
        userData.append('recipe_image',uimg);


        axios.post("http://localhost:90/user/",userData,config)
        .then(result111=>{
            console.log(result111)

            // if(result111.data.success){
            //     setmessage('recipe inserted succesfully!!');
            // }
           
        })
        
        .catch();
    }

    
    const handleSelect = (e) => {
        console.log(e.target.value);
      };


    return(
       <div className="container">
           
           <div className="row">
               
               <div className="col-md-4"></div>
               <div className="col-md-4">
                   <h2>Add User Details</h2>
                   <p>{}</p>
               </div>
               <form>
                   <div className="form-group">
                       <label>User Fullname</label>
                       <input type="text" className="form-control"
                       value={fullname}
                       onChange={e=>{setFullname(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>Email</label>
                       <input type="text" className="form-control"
                       value={email}
                       onChange={e=>{setEmail(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>Phone</label>
                       <input type="text" className="form-control"
                       value={phone}
                       onChange={e=>{setPhone(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>Location</label>
                       <input type="text" className="form-control"
                       value={location}
                       onChange={e=>{setLocation(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>Bio</label>
                       <input type="text" className="form-control"
                       value={bio}
                       onChange={e=>{setBio(e.target.value)}}
                       />
                   </div>
  
                  

                   <div className="form-group">

                       <label>User Image</label>
                       <input type="file" className="form-control"
                    //    accept="image/png, image/jpeg"
                       onChange={e=>setUimg(e.target.files[0])}
                       
                       />
                   </div>
                   

                   <div className="form-group">
                            
                            <input type="Submit" className="btn btn-light" 
                            onClick={addUser}
                            />
                        </div>
               </form>
               
           </div>
       </div>
    )
}
export default Adduser;