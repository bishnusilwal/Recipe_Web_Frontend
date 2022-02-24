import { useState } from "react";
import axios from "axios";
import "../css/login.css"


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
            
          <label  className="Txinput">Username</label>
          <input className="loginInput" type="text" 
           value={username}
                              onChange={(e)=>setUsername(e.target.value)}
            />
          <label  className="Txinput">Password</label>
          <input className="loginInput" type="password" 
           value={password}
                                onChange={(e)=>setPassword(e.target.value)} />
          
          <div className="form-group">
              <button className="loginButton"  onClick={userLogin}>Login</button>
                            
                            
                        </div>


          
        </form>
      </div>

    )
}

export default Login;