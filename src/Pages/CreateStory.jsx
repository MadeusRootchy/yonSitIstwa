import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import CRUD from '../Components/CRUD';
import EditStory from "./EditStory";

export default function CreateStory() {
  const { isAuthenticated } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const navigate = useNavigate();

  const { createStory } = CRUD("stories");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      console.log("You are not authorized to create a story.");
      return;
    }
    
    const storedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
    const newStory = {
      id: Date.now(),
      title,
      content,
      isPublic,
      isAnonymous,
      author: !isAnonymous ? storedUser.first_name : "Anonymous",
    };

    createStory(newStory);

    setTitle("");
    setContent("");
    setIsPublic(true);
    setIsAnonymous(false);

    navigate("/");
  }

  return (
    <div className="new-story">
        <EditStory 
        pageTitle={'New Story'}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        isPublic={isPublic}
        setIsPublic={setIsPublic}
        isAnonymous={isAnonymous}
        setIsAnonymous={setIsAnonymous}
        />

    </div>
  );
}