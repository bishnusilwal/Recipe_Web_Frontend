import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detailrecipe=()=>{
    const [udata,setUdata]=useState({
        ingredients: {
            name: ''
        },
        direction: {
            discription: ''
        },
        recipe: {
            name: '',
            Rimg:'',
            category:'',
            cooktime:'',
            description:'',
            pretime:'',
            totaltime:''
            
        },
        


    });
    const { rid } = useParams(); 
    const config={
        headers:{
            Authorization:'Bearer '+ localStorage.getItem('token')     
        }
    }
            //show starting
        useEffect(()=>{
            
            async function getRecipe () {
               await axios.get("http://localhost:90/recipe/one/"+rid, config)
            .then(result=>{
                setUdata(result.data)
                console.log(udata);
            })
            .catch(e=>{
                console.log(e)
            })
        }
        getRecipe()
        },[]);

    return(
        <div className="container">
            <div className="">

                        <div className="col-md-4">
                        <h2>Recipe Name:{udata.recipe.name}</h2>
                        <p>description : {udata.recipe.description}</p>
                        <p>Pretime : {udata.recipe.pretime}</p>
                        <p>cooktime : {udata.recipe.cooktime}</p>
                        <p>totaltime : {udata.recipe.totaltime}</p>
                        <p>category : {udata.recipe.category}</p>
                        <p>ingredients : {udata.ingredients.name}</p>
                        <p>direction : {udata.direction.discription}</p>
                        <p>Rimg : {udata.recipe.Rimg}</p>
                          {/* {
                             
                            udata.ingredients.map((i) => {
                                return ( <p>{i}</p>)
                            })
                        }  */}
                        
                       
                        
                        

                        
                    </div>
                   
            </div>
        </div>
    )
}
export default Detailrecipe;;