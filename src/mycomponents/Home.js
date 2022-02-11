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
                        <Link to={'/detail/'+singleData._id}>View</Link>
                        
                    </div>
                    )
                })}     
            </div>
        </div>
    )
}
export default Showrecipe;;



