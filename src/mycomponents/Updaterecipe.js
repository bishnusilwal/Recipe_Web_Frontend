import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Updaterecipe=()=>{

    const {rid} = useParams();
    console.log(rid)

    const [myrecipe, setMyrecipe] = useState([]);
    const [name, setName] = useState('');
   

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/recipe/one/"+rid, config)
        .then(result1212=>{
            console.log(result1212.data)
            setMyrecipe(result1212.data)
            setName(result1212.data.name)
           
        })
        .catch(e=>{
            /// something went wrong
        })
    },[])


/// to update the recipe
   const updaterecipe=(e)=>{
       e.preventDefault();

       const resdata = {
           rid, name
       }

axios.put("http://localhost:90/recipe/update", resdata, config )
   }



    return(
       <div className="container">
           <div className="row">
               
               <div className="col-md-6">
                   <h2>{myrecipe.name}</h2>
                   <p>description : {myrecipe.description}</p>
                    <p>Pretime : {myrecipe.pretime}</p>
                    <p>cooktime : {myrecipe.cooktime}</p>
                    <p>totaltime : {myrecipe.totaltime}</p>
                    <p>category : {myrecipe.category}</p>
                    <p>ingredients : {myrecipe.ingredients}</p>
                    <p>direction : {myrecipe.direction}</p>
                   <div>
                      {myrecipe.rdesc}
                   </div>
                
               </div>
               <div className="col-md-6">
                    <h2>Update Recipe</h2>

                   <form>
                        <div className="form-group">
                            <label>Recipe Name</label>
                            <input type="text" className="form-control"
                             value={name}
                             onChange={e=>{setName(e.target.value)}}
                             />

                            
                        </div>
                        <input type="submit" onClick={updaterecipe} />
                    </form>
               </div>
           </div>
           </div>
    )
    
}

export default Updaterecipe;