import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Showrecipe=()=>{
    const [udata,setUdata]=useState([{}]);
    const config={
        headers:{
            Authorization:'Bearer '+ localStorage.getItem('token')     
        }
    }
            //show starting
        useEffect(()=>{
            axios.get("http://localhost:90/recipe/me", config)
            .then(result=>{
                // console.log(result.data)
                setUdata(result.data)
                console.log(udata);
            })
            .catch(e=>{
                console.log(e)
            })

    

        },[]);
        const deleteRecipe=(rid)=>{
            const data={rid}
            axios.delete("http://localhost:90/recipe/delete/"+rid,config)
            .then(result=>(console.log(result.data)))
            .catch()
        }

    return(
        <div className="container">
            <div className="row">
                {
                udata.map((singleData)=>{

                    return(
                        <div className="col-md-4">
                        <h2>Recipe Name:{singleData.name}</h2>
                        <p><img src={'http://localhost:90/'+singleData.rimg
                    } className="img-fluid"  /></p>
                        <p>description : {singleData.description}</p>
                        <p>Pretime : {singleData.pretime}</p>
                        <p>cooktime : {singleData.cooktime}</p>
                        <p>totaltime : {singleData.totaltime}</p>
                        <p>category : {singleData.category}</p>
                        {/* <p>ingredients : {singleData.ingredient}</p>                    
                        <p>direction : {singleData.direction}</p> */}
                        <button onClick={()=>{deleteRecipe(singleData._id)}}>Delete</button>
                        <Link to={'/updaterecipe/'+singleData._id}>Update Recipe</Link>
                        <Link to={'/detail/'+singleData._id}>View</Link>
                        
                    </div>
                    )
                })}     
            </div>
        </div>
    )
}
export default Showrecipe;;