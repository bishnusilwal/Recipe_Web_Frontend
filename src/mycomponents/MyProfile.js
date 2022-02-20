import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../css/profile.css"

const Showuser=()=>{
    const [udata,setUdata]=useState([{}]);
    const config={
        headers:{
            Authorization:'Bearer '+ localStorage.getItem('token')     
        }
    }
            //show starting
        useEffect(()=>{
            axios.get("http://localhost:90/user/profile", config)
            .then(result=>{
                // console.log(result.data)
                setUdata(result.data)
                console.log(udata);
            })
            .catch(e=>{
                console.log(e)
            })

    

        },[]);

    return(
        <div className="container">
            <div className="row">

                        <div className="col-md-4">
                             {/* <p><img src={'http://localhost:90/'+singleData.uimg
                    } className="img-fluid"  /></p> */}
                        <h2 className="usernametitle">Fullname Name:{udata.fullname}</h2>
                        <p className="detals">phone : {udata.phone}</p>
                        <p className="detals">location : {udata.location}</p>
                        <p className="detals"> bio : {udata.bio}</p>
                        {/* <button onClick={()=>{deleteRecipe(singleData._id)}}>Delete</button> */}
                        {/* <Link to={'/updaterecipe/'+singleData._id}>Update Recipe</Link> */}
                
                        
                    </div>
     
            </div>
        </div>
    )
}
export default Showuser;