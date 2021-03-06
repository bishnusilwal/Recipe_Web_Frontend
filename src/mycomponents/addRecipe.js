import "../css/addRecipe.css"
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
    const [ingredients,setIngredients]=useState('');
    const [direction,setDirection]=useState('');
    const [rimg,setRimg]=useState(null);
    const config={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token'),
            "Content-Type": "multipart/form-data"
        }
    }
    const addUser=(e)=>{
        e.preventDefault();
        const recipeData=new FormData();
        recipeData.append('name',name);
        recipeData.append('description',description);
        recipeData.append('pretime',pretime);
        recipeData.append('cooktime',cooktime);
        recipeData.append('totaltime',totaltime);
        recipeData.append('category',category);
        recipeData.append('ingredients',ingredients);
        recipeData.append('direction',direction);
        recipeData.append('recipe_image',rimg);
        axios.post("http://localhost:90/recipe/",recipeData,config)
        .then(result111=>{
            console.log(result111)
           
        })
        
        .catch();
    }

    
    const handleSelect = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value);
      };


    return(

<div className="addrecipe">
      <span className="recipeTitle">Add Recipe</span>
      <form  className="recipeForm">
                       <label className="Txinput">Recipe Name</label>
                       <input type="text" className="recipeInput" placeholder="Enter your Recipe Name..." 
                       value={name}
                       onChange={e=>{setName(e.target.value)}}
                       />

                    <label className="Txinput">Description</label>
                       <input type="text" className="recipeInput" placeholder="Enter your Discription..." 
                       value={description}
                       onChange={e=>{setDescription (e.target.value)}}
                       />                   
                  
            
                       <label className="Txinput">Pretime</label>
                       <input type="text" className="recipeInput" placeholder="Enter your PreTime..." 
                       value={pretime}
                       onChange={e=>{setPretime(e.target.value)}}
                       />
         
                  
                       <label className="Txinput">cooktime</label>
                       <input type="text" className="recipeInput" placeholder="Enter your CookTime..." 
                       value={cooktime}
                       onChange={e=>{setCooktime(e.target.value)}}
                       />
              
                       <label className="Txinput">TotalTime</label>
                       <input type="text"className="recipeInput" placeholder="Enter your TotalTime..." 
                       value={totaltime}
                       onChange={e=>{setTotaltime(e.target.value)}}
                       />

<label className="Txinput">Category</label>
             
  
                   <select className="catInput"  name="selectList" id="selectList"    onChange={handleSelect}>
                    ?? <option value="veg">Veg </option>
                    ?? <option value="non veg">Non-Veg</option>
                    ?? <option value="vegan">Vegan</option>
                    </select>


                    <label className="Txinput">Direction</label>
                       <input type="text"className="recipeInput" placeholder="Enter your TotalTime..." 
                       value={direction}
                       onChange={e=>{setDirection(e.target.value)}}
                       />


<label className="Txinput">Ingredients</label>
                       <input type="text"className="recipeInput" placeholder="Enter your TotalTime..." 
                       value={ingredients}
                       onChange={e=>{setIngredients(e.target.value)}}
                       />


                 
                   <label className="Txinput">Recipe Image</label>
                       <input type="file"className="recipeInput" 
                    //    value={Image}
                       onChange={e=>setRimg(e.target.files[0])}   
                       />



                     <div className="form-group">
                            
                            <input type="Submit" className="RSButton" 
                            onClick={addUser}
                            />
                        </div>
               </form>
      
     </div> 









    )
}
export default Addrecipe;