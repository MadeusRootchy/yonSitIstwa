import React, { useState } from "react";
import { useAuth } from "../pages/auth";
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
      const usersResponse = await fetch("https://reqres.in/api/users");
      const usersData = await usersResponse.json();

      const matchingUser = usersData.data.find(user => user.email === email && user.first_name === password);

      if (matchingUser) {
        setIsAuthenticated(true);
        localStorage.setItem("authenticatedUser", JSON.stringify(matchingUser));
        console.log('login succefull')
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
