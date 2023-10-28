import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import CRUD from '../Components/CRUD';

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

    navigate("/story");
  }

  return (
    <div className="new-story">
      <h2>New Story</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-field">
          <label className= "form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-input"
            type="text"
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="content">
            Content:
          </label>
          <textarea
            className="form-textarea"
            value={content}
            id="content"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
        <input
              className="checkbox-input"
              type="checkbox"
              id="Public"
              checked={isPublic}
              onChange={() => setIsPublic(!isPublic)}
            />
          <label className="checkbox-label" htmlFor="Public">
            Public
          </label>
        </div>
        <div className="form-field">
        <input
            type="checkbox"
            id="Anonymous"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          <label className="checkbox-label" htmlFor="Anonymous">
            Anonymous
          </label>
        </div>
        <div>
          <button type="submit" id="create" className="btn-save">
            Post 
          </button>
        </div>
      </form>
    </div>
  );
}