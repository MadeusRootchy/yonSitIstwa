import React, { useState } from "react";
import Login from '../Pages/Login';
import StoryList from "./StoryList";
import { useAuth } from "../Components/AuthContext";
import CreateStory from "./CreateStory";

export default function Home() {

  return (
    <div className="home">
      <div>
        <h2 >RootStories</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elitamet consectetur adipisicing elit.</p>
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
      </div>
    </div>
  );
}
