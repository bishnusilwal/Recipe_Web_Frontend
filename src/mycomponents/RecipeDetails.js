import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from 'react-bootstrap-star-rating';

const Detailrecipe=()=>{

    const [rating,setRating]=useState(0);
    const [review,setReview]=useState('');
    const [likes,setLikes]=useState(false);

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
        
        review: []

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

       async function likePost(){
            await axios.put("http://localhost:90/recipe/update/like/"+rid)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
        }

        function ratePost(){
            console.log(rating); 
            const revi = { rating }
            axios.put("http://localhost:90/recipe/"+rid+"/rate", revi, config)
            .then(result => {

            })
            .catch(error => {

            })
        }

        function reviewePost(){
            const revi = { review }
            axios.put("http://localhost:90/recipe/"+rid+"/review", revi, config)
            .then(result => {

            })
            .catch(error => {

            })
        }

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

                        <select 
                class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                onChange={e => setRating(e.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>

              <input type="Submit" className="btn btn-light" 
 onClick={ratePost}
 />

        <div className="form-group">
                       <label>Review</label>
                       <input type="text" className="form-control"

value={review}
onChange={e=>{setReview(e.target.value)}}



                      
 /> <input type="Submit" className="btn btn-light" 
 onClick={reviewePost}
 />
                       </div>
                       <div className="form-group">
                            
                            <input type="button" className="btn btn-light" 
                            onClick={likePost}
                            />
                        </div>
                        <p>Reviews</p>
                          {
                             
                            udata.review.map((i) => {
                                return (
                                    <div>
                                         <p>manxe: {i.mance}</p>
                                         <p>review: {i.reviewss}</p>
                                    </div>
                                )
                            })
                        } 
                        
                       
                        
                        

                        
                    </div>
                   
            </div>
        </div>
    )
}
export default Detailrecipe;