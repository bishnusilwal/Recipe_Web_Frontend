
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
                console.log(result.data)
                setUdata(result.data)
                // console.log(udata);
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
                        <h3>All Receipies</h3>
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



