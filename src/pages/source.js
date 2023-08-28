import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Notfound from "./notfound";
import Layout from "./layout";
import CreateStories from "./createstories";
import { useAuth } from "./auth"; 
import UserStories from "./story";

export default function Source() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/about" element={<About />} />

        
        <Route path="/story" element={ <UserStories /> } />
        <Route path="/createstories" element={isAuthenticated ? <CreateStories /> : <Navigate to="/login" />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
