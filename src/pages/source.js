import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Notfound from "./notfound";
import Layout from "../coponents/layout";
import CreateStories from "./createstories";
import { useAuth } from "../coponents/auth"; 
import UserStories from "./story";
import { Link } from "react-router-dom";

export default function Source() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/about" element={<About />} />

        
        <Route path="/story" element={ <UserStories /> } />
        <Route path="/createstories" element={isAuthenticated ? <CreateStories /> :<h3><Link to="/login">
        {isAuthenticated ? '':"Go to the login page"}</Link></h3>} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
