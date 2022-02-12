// import { Component } from "react/cjs/react.development";
// class Home extends Component{
//     render(){
//         return(
//             <div>This is home page content...</div>
//         )
//     }
// }
// export default Home;

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Home(){
//     const [udata,setUdata]=useState([{}]);
//     // const config={
//     //     headers:{
//     //         Authorization:'Bearer '+ localStorage.getItem('token')     
//     //     }
//     // }
//             //show starting
//         useEffect(()=>{
//             axios.get("http://localhost:90/recipe/")
//             .then(result=>{
//                 // console.log(result.data)
//                 setUdata(result.data)
//                 console.log(udata);
//             })
//             .catch(e=>{
//                 console.log(e)
//             })

    

//         },[]);
      

//     return(
//         <div className="container">
//             <div className="row">
//                 {
//                 udata.map((singleData)=>

//                     (
//                         <div className="col-md-4">
//                         <h2>Recipe Name:{singleData.name}</h2>
//                         <p><img src={'http://localhost:90/'+singleData.rimg
//                     } className="img-fluid"  /></p>
//                         <p>description : {singleData.description}</p>
//                         <p>Pretime : {singleData.pretime}</p>
//                         <p>cooktime : {singleData.cooktime}</p>
//                         <p>totaltime : {singleData.totaltime}</p>
//                         <p>category : {singleData.category}</p>
//                          {/* <p>ingredients : {udata.ingredients.name}</p> */}
//                         {/* <p>direction : {udata.direction.discription}</p> */}
//                         {/* <p>Rimg : {udata.recipe.Rimg}</p> */}
//                         {/* <p>ingredients : {singleData.ingredient}</p>                    
//                         <p>direction : {singleData.direction}</p> */}
                   
//                     </div>
//                     )
//                 )}     
//             </div>
//         </div>
//     )
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../asset/img/bg-img/r1.jpg';
const Showrecipe=()=>{
    const [udata,setUdata]=useState([{}]);
    
            //show starting
        useEffect(()=>{
            axios.get("http://localhost:90/recipe/")
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
        <section class="best-receipe-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h3>The best Receipies</h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="d-flex flex-row col-12 col-sm-6 col-lg-4">
                    {
                        udata.map((recipe) => (
                            <Link class="single-best-receipe-area mb-30 mr-5 text-decoration-none" to={"/detail/"+recipe._id}>
                                <div className="img-container">
                                <img src={"http://localhost:90/"+recipe.rimg} alt="" className="my-image" />

                                </div>
                                <div class="receipe-content">
                                    <a href="receipe-post.html">
                                        <h5>{recipe.name}</h5>
                                    </a>
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
    )
}
export default Showrecipe;;



