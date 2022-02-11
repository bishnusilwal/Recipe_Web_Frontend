import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                        <h2>Fullname Name:{udata.fullname}</h2>
                        <p>phone : {udata.phone}</p>
                        <p>location : {udata.location}</p>
                        <p>bio : {udata.bio}</p>
                        {/* <button onClick={()=>{deleteRecipe(singleData._id)}}>Delete</button> */}
                        {/* <Link to={'/updaterecipe/'+singleData._id}>Update Recipe</Link> */}
                
                        
                    </div>
     
            </div>
        </div>
    )
}
export default Showuser;