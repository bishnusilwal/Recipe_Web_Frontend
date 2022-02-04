import axios from "axios";
import { useEffect, useState } from "react";
const Showrecipe=()=>{
    const [udata,setUdata]=useState([]);
    const config={
        header:{
            Authorization:'Bearer '+ localStorage.getItem('token')     
        }
    }
            //show starting
        useEffect(()=>{
            axios.get("http://localhost:90/recipe/:id",config)
            .then(result=>{
                // console.log(result.data)
                setUdata(result.data)
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
                {udata.map(singleData=>{
                    return(
                        <div className="col-md-4">
                        <h2>Recipe Name:{singleData.name}</h2>
                        <p>description : {singleData.description}</p>
                        <p>Pretime : {singleData.pretime}</p>
                        <p>cooktime : {singleData.cooktime}</p>
                        <p>totaltime : {singleData.totaltime}</p>
                        <p>category : {singleData.category}</p>
                        <p>ingredients : {singleData.ingredients}</p>
                        <p>direction : {singleData.direction}</p>
                        <button onClick={()=>{deleteRecipe(singleData._id)}}>Delete</button>
                        {/* <Link to={'/updaterecipe' + singleData._id}>Update Recipe</Link> */}
                    </div>
                    )
                })}     
            </div>
        </div>
    )
}
export default Showrecipe;