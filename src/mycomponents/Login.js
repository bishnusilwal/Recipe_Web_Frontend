import { useState } from "react";
import axios from "axios";
import "../css/login.css"
// import "../asset/style.css"

const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const userLogin=(e)=>{
        e.preventDefault();
        const userData = {
            username, password
        }
        axios.post("http://localhost:90/user/login", userData)
        .then(result11=>{
            if(result11.data.token){
                /// login success
                localStorage.setItem('token', result11.data.token);
                window.location.replace('/Showrecipe');

            }
            else{
                /// login fail
                setMessage("Invalid Username ")
            }
        })
        .catch()
    }
    return(
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Username</label>
          <input className="loginInput" type="text" placeholder="Enter your username..."
           value={username}
                              onChange={(e)=>setUsername(e.target.value)}
            />
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..."
           value={password}
                                onChange={(e)=>setPassword(e.target.value)} />
          
          <div className="form-group">
              <button className="loginButton"  onClick={userLogin}>Login</button>
                            
                            {/* <input type="Submit" className="btn btn-light" 
                            onClick={userLogin}
                            /> */}
                        </div>


          
        </form>
      </div>






        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-4">
               
        //         </div>
        //         <div className="col-md-4">
        //         {message}
        //             <form>
        //                 <div className="form-group">
        //                     <label>Username</label>
        //                     <input type="text" className="form-control"
        //                     value={username}
        //                     onChange={(e)=>setUsername(e.target.value)}
        //                     />
        //                 </div>

        //                 <div className="form-group">
        //                     <label>Password</label>
        //                     <input type="password" className="form-control"
        //                     value={password}
        //                     onChange={(e)=>setPassword(e.target.value)}
        //                     />
        //                 </div>

        //                 <div className="form-group">
                            
        //                     <input type="Submit" className="btn btn-light" 
        //                     onClick={userLogin}
        //                     />
        //                 </div>
        //             </form>
        //         </div>
        //         <div className="col-md-4">
                    
        //         </div>
        //     </div>
            
        // </div>
    )
}

export default Login;