import React, { useState,useContext } from "react";
import { useAuth } from "./auth";
import styles from './loginform.module.css';


export default function LoginForm() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const credentials = {
      email, 
      password,
    };
  
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
      console.log('login successful')
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className={styles.loginFormContainer}>
      <h2>Login</h2>
      {isAuthenticated ? (
        <p>You are already logged in.</p>
      ) : (
        <form onSubmit={handleLogin}>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="email">Email:</label>
            <input
              className={styles.formInput}
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="password">Password or first_name:</label>
            <input
              className={styles.formInput}
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.submitButton} type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
