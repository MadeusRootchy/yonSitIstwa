import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
      !!localStorage.getItem("authenticatedUser") 
    );
    useEffect(() => {
      if (!isAuthenticated) {
        localStorage.removeItem("authenticatedUser");
      }
    }, [isAuthenticated]);
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    );
    }
    
export function useAuth() {
  return useContext(AuthContext);
}
