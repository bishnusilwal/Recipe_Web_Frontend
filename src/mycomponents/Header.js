import { Component } from "react/cjs/react.development";
import {Link} from "react-router-dom";
class Header extends Component{
    render(){
        return(
            <>
            <div>
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/product/111">Product</Link>
                <Link to="/register/">Register</Link> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
     
      <li class="nav-item active">
        <Link class="nav-link" to="/about">About us </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/contact">Contact </Link>
      </li>
     
      <li class="nav-item active">
        <Link class="nav-link" to="/register/"> Register</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/login">Login </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/addrecipe">Add Recipe </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/showrecipe">My Recipe </Link>
      </li>
    </ul>
   
  </div>
</nav>

                
            </div>
            </>
        )
    }
}
export default Header;