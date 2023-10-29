import React, { useState,useContext } from "react";
import { useAuth } from "../Components/AuthContext";


export default function Login() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const credentials = {
      email, 
      password,
    }
    
    try {
      const usersResponse = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const response = await fetch("https://reqres.in/api/users");
      const userData = await response.json();

      if (usersResponse.ok){
        const {token} = await usersResponse.json();
        setIsAuthenticated(true);
        localStorage.setItem("token", token);

        const matchingUser = userData.data.find(user => user.email === email && user.first_name === password);
        localStorage.setItem("authenticatedUser", JSON.stringify(matchingUser));

        console.log('Login successful')
      }
      else {
        console.error("Authentication failed");
      }
    } 
    catch (error) {
      console.error("An error has occurred:", error);
    }
  }


  return (
    <div className="login">
      <h2>Login</h2>
      {
        isAuthenticated ? 
      (
        <div>You are already logged in !</div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
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
