import { Component } from "react/cjs/react.development";
import {Link} from "react-router-dom";
import "../asset/style.css"
import logo from '../asset/img/core-img/logo.png';

class Header extends Component{
    render(){

      const logout=()=>{
        localStorage.clear();
        window.location.replace('/');
        
      }
      var menu;
      if(localStorage.getItem('token')){
        menu=(
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    


    <header class="header-area">

<div class="delicious-main-menu">
    <div class="classy-nav-container breakpoint-off">
        <div class="container">
         
            <nav class="classy-navbar justify-content-between" id="deliciousNav">

            
                <a class="nav-brand" href="index.html"><img src={logo}  alt=""></img></a> 

              
                <div class="classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>

                <div class="classy-menu">

                    <div class="classycloseIcon">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                    </div>

               
                    <div class="classynav">
                        <ul>

                       
                            <li class="active">
                            <Link class="nav-link" to="/">Home </Link> 
                            </li>

                            <li class="">
                            <Link class="nav-link" to="/about">About Us </Link>
                            </li>

                             <li class="">
                            <Link class="nav-link" to="/contact">Contact </Link>
                            </li>
                            <li class="">
                            <Link class="nav-link" to="/addrecipe">Add Recipe </Link>
                            </li>
                            <li class="">
                            <Link class="nav-link" to="/showrecipe">My Recipe</Link>
                            </li>

                            <li class="">
                            <Link class="nav-link" to="/adduser">Add User </Link>
                            </li>
                            <li class="">
                            <Link class="nav-link" to="/showuser">My Profile </Link>
                            </li>


                            <li class="">
                            <button class="nav-link" onClick={logout} >Log Out </button>
                            </li>
                            

                        </ul>

                    
                        {/* <div class="search-btn">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div> */}

                    </div>
                  
                </div>
            </nav>
        </div>
    </div>
</div>
</header>


    
   
  </div>







        )
      }
      else{
        menu=(
          <div class="collapse navbar-collapse" id="navbarSupportedContent">


            
<header class="header-area">

<div class="delicious-main-menu">
    <div class="classy-nav-container breakpoint-off">
        <div class="container">
         
            <nav class="classy-navbar justify-content-between" id="deliciousNav">

            
                <a class="nav-brand" href="index.html"><img src={logo}  alt=""></img></a> 

              
                <div class="classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>

                <div class="classy-menu">

                    <div class="classycloseIcon">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                    </div>

               
                    <div class="classynav">
                        <ul>

                       
                            <li class="active">
                            <Link class="nav-link" to="/">Home </Link> 
                            </li>

                            <li class="">
                            <Link class="nav-link" to="/about">About Us </Link>
                            </li>

                             <li class="">
                            <Link class="nav-link" to="/contact">Contact </Link>
                            </li>
                            <li class="">
                            <Link class="nav-link" to="/register">Register </Link>
                            </li>
                            <li class="">
                            <Link class="nav-link" to="/login">Login</Link>
                            </li>                    

                        </ul>

                    
                        {/* <div class="search-btn">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div> */}

                    </div>
                  
                </div>
            </nav>
        </div>
    </div>
</div>
</header>

   
  </div>
        )
      }



        return(
            <>
            <div>
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/product/111">Product</Link>
                <Link to="/register/">Register</Link> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">ChetoMitho</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  {menu}

  
</nav>

                
            </div>
            </>
        )
    }
}
export default Header;