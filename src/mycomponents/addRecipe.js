
import { Link } from "react-router-dom";
import axios from "axios";
import {DropdownButton, Dropdown} from "react-bootstrap";
import { useState } from "react";
import * as React from "react";

const Addrecipe=()=>{
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [pretime,setPretime]=useState('');
    const [cooktime,setCooktime]=useState('');
    const [totaltime,setTotaltime]=useState('');
    const [category,setCategory]=useState('');
    const [ingredients,setIngredients]=useState([{
        name: ''
    }]);
    const [direction,setDirection]=useState([{
        discription: ''
    }]);
    const [iname, setIname] = useState('');
    const [ddiscription, setDdiscription] = useState('');

    const addUser=(e)=>{
        e.preventDefault();
        const recipeData={
            name,description,pretime,cooktime,totaltime,category,ingredients,direction
        }
        console.log(recipeData)
        const config={
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        }
        axios.post("http://localhost:90/recipe/", recipeData,config)
        .then(result111=>{

            // if(result111.data.success){
            //     setmessage('recipe inserted succesfully!!');
            // }
           
        })
        
        .catch();
    }

    const addIngredients = (e) => {
        e.preventDefault();
        const item = {
            name: iname,
        };
        const newItem = [item]
        setIngredients(newItem)
        setIname('')
    }
    const addDirection = (e) => {
        e.preventDefault();
        const item = {
            discription: ddiscription,
        };
        const newItem = [item]
        setDirection(newItem)
        setDdiscription('')
    }
    
    const handleSelect = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value);
      };


    return(
       <div className="container">
           
           <div className="row">
               
               <div className="col-md-4"></div>
               <div className="col-md-4">
                   <h2>Add Recipe Details</h2>
                   <p>{}</p>
               </div>
               <form>
                   <div className="form-group">
                       <label>Recipe Name</label>
                       <input type="text" className="form-control"
                       value={name}
                       onChange={e=>{setName(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>Description</label>
                       <input type="text" className="form-control"
                       value={description}
                       onChange={e=>{setDescription(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>Pretime</label>
                       <input type="text" className="form-control"
                       value={pretime}
                       onChange={e=>{setPretime(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>cooktime</label>
                       <input type="text" className="form-control"
                       value={cooktime}
                       onChange={e=>{setCooktime(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label>TotalTime</label>
                       <input type="text" className="form-control"
                       value={totaltime}
                       onChange={e=>{setTotaltime(e.target.value)}}
                       />
                   </div>
  
                   <select name="selectList" id="selectList" onChange={handleSelect}>
                      <option value="veg">Veg </option>
                      <option value="non veg">Non-Veg</option>
                      <option value="vegan">Vegan</option>
                    </select>
{/*                   
                   {/* <div className="form-group">
                       <label>ingredients</label>
                       <input type="text" className="form-control"
                       value={ingredients}
                       onChange={e=>{setIngredients(e.target.value)}}
                       />
                   </div> */} 

                    




                <div className="flex flex-row">
                   <div className="form-group">
                       <label>Direction</label>
                       <input type="text" className="form-control"
                       value={ddiscription}
                       onChange={e=>{setDdiscription(e.target.value)}}/>

                   </div>
                   <button onClick={addDirection}>add</button>
                   </div>


                   <div className="flex flex-row">
                   <div className="form-group">
                       <label>Ingredient</label>
                       <input type="text" className="form-control"
                       value={iname}
                       onChange={e=>{setIname(e.target.value)}}/>

                   </div>
                   <button onClick={addIngredients}>add</button>
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
export default Addrecipe;