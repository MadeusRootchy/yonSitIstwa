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
    <div className={"login"}>
      <h2>Login</h2>
      {
        isAuthenticated ? 
      (
        <div>You are already logged in !</div>
      ) : (
        <form onSubmit={handleLogin} className={"form"}>
          <div className={"formField"}>
            <label 
            className={"formLabel"} 
            htmlFor="email">
              Email :
            </label>
            <br />
            <input
              className={"formInput"}
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className={"formField"}>
            <label 
            
            htmlFor="password">
              Password/Firstname :
            </label>
            <br />
            <input
              
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className={"formField"}>
            <button  type="submit">
              Login
            </button>
          </div>
        </form>
        )
      }
    </div>
  );
}
