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


                {udata.map(singalData=>{
                    return(
                        <div className="col-md-4">
                        <h2>Recipe Name:{singalData.name}</h2>
                        <button onClick={()=>{deleteRecipe(singalData._id)}}>Delete</button>
                    
                </div>
                    )

                })}


                
            </div>

        </div>
    )

}
export default Showrecipe;