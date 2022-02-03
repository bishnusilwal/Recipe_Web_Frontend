import { Component } from "react/cjs/react.development";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import Register from "./Register";
import Login from "./Login";
import {Route, Routes} from 'react-router-dom';
import Addrecipe from "./addRecipe";
import Showrecipe from "./Showrecipe";
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

                    
                </Routes>
            </div>
        )
    }
}
export default Mid;  