
import "../css/updaterecipe.css"
import axios from "axios";
import {DropdownButton, Dropdown} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Updaterecipe=()=>{

    const {rid} = useParams();
    console.log(rid)

    const [myrecipe, setMyrecipe] = useState({

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
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pretime, setPretime] = useState('');
    const [cooktime, setCooktime] = useState('');
    const [totaltime, setTotaltime] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [direction, setDirection] = useState('');


    const [rimg,setRimg]=useState(null);
   

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    useEffect(()=>{
        async function getRecipe() {
            axios.get("http://localhost:90/recipe/one/"+rid, config)
        .then(result1212=>{
            console.log(result1212.data)
            setMyrecipe(result1212.data)
            // setName(result1212.data.name)
           
        })
        .catch(e=>{
            /// something went wrong
        })
        }
        getRecipe()
    },[])

    const updateimage=(e)=>{
        e.preventDefault();
         const recipeData=new FormData();
        recipeData.append('recipe_image',rimg);
        const data={rid}
        axios.put("http://localhost:90/recipe/images/"+rid,recipeData, config)
        .then(result=>(console.log(result.data)))
        .catch()
    }


/// to update the recipe
   const updaterecipe=(e)=>{
       e.preventDefault();

       const resdata = {
           rid, name, description,pretime,cooktime,totaltime,category,direction,ingredients
       }

axios.put("http://localhost:90/recipe/update/"+rid, resdata, config )
   }
   const handleSelect = (e) => {
    setCategory(e.target.value);
  };




    return(
//        <div className="container">
//            <div className="row">
               
             
//                <div className="col-md-6">
//                     <h2>Update Recipe</h2>

//                    <form>
//                         <div className="form-group">
//                             <label>Recipe Name</label>
//                             <input type="text" className="form-control"
//                             placeholder={myrecipe.recipe.name}
//                              value={name}
//                              onChange={e=>{setName(e.target.value)}}
//                              />

                            
//                         </div>
//                         <div className="form-group">
//                        <label>Description</label>
//                        <input type="text" className="form-control"
//                        value={description}
//                        placeholder={myrecipe.recipe.description}
                    
//                        onChange={e=>{setDescription(e.target.value)}}
//                        />
//                    </div>
//                    <div className="form-group">
//                        <label>Pretime</label>
//                        <input type="text" className="form-control"
//                        value={pretime}
//                        placeholder={myrecipe.recipe.pretime}
//                        onChange={e=>{setPretime(e.target.value)}}
//                        />
//                    </div>
//                    <div className="form-group">
//                        <label>cooktime</label>
//                        <input type="text" className="form-control"
//                        value={cooktime}
//                        placeholder={myrecipe.recipe.cooktime}
//                        onChange={e=>{setCooktime(e.target.value)}}
//                        />
//                    </div>
//                    <div className="form-group">
//                        <label>TotalTime</label>
//                        <input type="text" className="form-control"
//                        value={totaltime}
//                        placeholder={myrecipe.recipe.totaltime}
//                        onChange={e=>{setTotaltime(e.target.value)}}
//                        />
//                    </div>
//                    <select name="selectList" id="selectList" onChange={handleSelect}>
                  
//                       <option value="veg">Veg </option>
//                       <option value="non veg">Non-Veg</option>
//                       <option value="vegan">Vegan</option>
//                     </select>

//                     <div className="flex flex-row">
//                    <div className="form-group">
//                        <label>Direction</label>
//                        <input type="text" className="form-control"
//                        value={direction}
//                        placeholder={myrecipe.direction.discription}
//                        onChange={e=>{setDirection(e.target.value)}}/>

//                    </div>
//                    {/* <button onClick={addDirection}>add</button> */}
//                    </div>

//                    <div className="flex flex-row">
//                    <div className="form-group">
//                        <label>Ingredient</label>
//                        <input type="text" className="form-control"
//                        value={ingredients}
//                        placeholder={myrecipe.ingredients.name}
//                        onChange={e=>{setIngredients(e.target.value)}}/>

//                    </div>
//                    {/* <button onClick={addIngredients}>add</button> */}
//                    </div>

                        

                        
//                         <input type="submit" onClick={updaterecipe} />

//                         <div className="form-group">

// <label>Recipe Image</label>

// <input type="file" className="form-control"

// accept="image/png, image/jpeg"
// onChange={e=>setRimg(e.target.files[0])}

// />
// <div className="form-group">
                            
//                             <input type="Submit" className="btn btn-light" 
//                             onClick={updateimage}
//                             />
//                         </div>
// </div>
//                     </form>

                    
//                </div>
//            </div>
//            </div>





<div className="updaterecipe">
      <span className="recipeTitle">Add Recipe</span>
      <form  className="recipeForm">
      <div className="form-group">
                            <label className="Txinput">Recipe Name</label>
                            <input type="text" className="form-control"
                            placeholder={myrecipe.recipe.name}
                             value={name}
                             onChange={e=>{setName(e.target.value)}}
                             />

                            
                        </div>
                        <div className="form-group">
                       <label className="Txinput">Description</label>
                       <input type="text" className="form-control"
                       value={description}
                       placeholder={myrecipe.recipe.description}
                    
                       onChange={e=>{setDescription(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label className="Txinput">Pretime</label>
                       <input type="text" className="form-control"
                       value={pretime}
                       placeholder={myrecipe.recipe.pretime}
                       onChange={e=>{setPretime(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label className="Txinput">cooktime</label>
                       <input type="text" className="form-control"
                       value={cooktime}
                       placeholder={myrecipe.recipe.cooktime}
                       onChange={e=>{setCooktime(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <label className="Txinput">TotalTime</label>
                       <input type="text" className="form-control"
                       value={totaltime}
                       placeholder={myrecipe.recipe.totaltime}
                       onChange={e=>{setTotaltime(e.target.value)}}
                       />
                   </div>
                   <select name="selectList" id="selectList" onChange={handleSelect}>
                  
                      <option value="veg">Veg </option>
                      <option value="non veg">Non-Veg</option>
                      <option value="vegan">Vegan</option>
                    </select>

                    <div className="flex flex-row">
                   <div className="form-group">
                       <label className="Txinput">Direction</label>
                       <input type="text" className="form-control"
                       value={direction}
                       placeholder={myrecipe.direction.discription}
                       onChange={e=>{setDirection(e.target.value)}}/>

                   </div>
                   {/* <button onClick={addDirection}>add</button> */}
                   </div>

                   <div className="flex flex-row">
                   <div className="form-group">
                       <label className="Txinput">Ingredient</label>
                       <input type="text" className="form-control"
                       value={ingredients}
                       placeholder={myrecipe.ingredients.name}
                       onChange={e=>{setIngredients(e.target.value)}}/>

                   </div>
                   {/* <button onClick={addIngredients}>add</button> */}
                   </div>

                        

                        
                        <input className="RSButton"  type="submit" onClick={updaterecipe} />

                        <div className="form-group">

<label className="Txinput">Recipe Image</label>

<input type="file" className="form-control"

accept="image/png, image/jpeg"
onChange={e=>setRimg(e.target.files[0])}

/>
<div className="form-group">
                            
                            <input   type="Submit" className="RSButton"  
                            onClick={updateimage}
                            />
                        </div>
</div>
               </form>
      
     </div> 


    )
    
}

export default Updaterecipe;