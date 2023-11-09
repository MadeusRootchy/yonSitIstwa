import React, { useState} from "react";
import { useAuth } from './AuthContext';
import axios from "axios";


export default function Login() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersData, setUsersData] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();
  
 
      axios.get("https://reqres.in/api/users")
      .then( response => { 
        setUsersData(response.data.data)
      }).catch( err => {
        console.log('Error',err)
      })
      for(let user in usersData){

        if (usersData[user].email == email && usersData[user].first_name ==password){
          setIsAuthenticated(true);
          localStorage.setItem("authenticatedUser", JSON.stringify(usersData[user]));
          break;
        }
        else{
          setIsAuthenticated(false);
        }
      }

    } 


  return (
    <div className={`${isAuthenticated} ? logged-in : login`}>
      {
        isAuthenticated ? '' : (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div className='login-form-field'>
            <br />
            <input
              type="email"
              placeholder="Email..."
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='login-form-field'>
            <br />
            <input
              placeholder="Password"
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='login-form-links'>
            <a href="#">Forgot Password</a>
            <br />
            <a href="#">Create New Account</a>
          </div>
          <br />
          <div className='login-form-field'>
            <button type="submit">
              Login
            </button>
          </div>
        </form>
        )
      }
    </div>
  );
}
