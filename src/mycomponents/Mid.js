import { Component } from "react/cjs/react.development";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import Register from "./Register";
import Login from "./Login";
import {Route, Routes} from 'react-router-dom';
import Addrecipe from "./addRecipe";
import Showrecipe from "./Showrecipe";
import Updaterecipe from "./Updaterecipe";
import Detailrecipe from "./RecipeDetails";
class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
               

                   <Route path="/register" element={<Register/>} />
                   <Route path="/login" element={<Login/>} />
                   <Route path="/addrecipe" element={<Addrecipe/>} />
                   <Route path="/showrecipe" element={<Showrecipe/>} />
                   <Route path="/updaterecipe/:rid" element={<Updaterecipe/>} />
                   <Route path="/detail/:rid" element={<Detailrecipe/>} />

                    
                </Routes>
            </div>
        )
    }
}
export default Mid;  