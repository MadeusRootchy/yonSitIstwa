import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import CRUD from '../Components/CRUD';
import styles from './CreateStory.module.css';

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
    <div className={styles.createStory}>
      <h2>New Story</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="title">
            Title:
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="content">
            Content:
          </label>
          <textarea
            className={styles.formTextarea}
            value={content}
            id="content"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.checkboxLabel} htmlFor="Public">
            <input
              className={styles.checkboxInput}
              type="checkbox"
              id="Public"
              checked={isPublic}
              onChange={() => setIsPublic(!isPublic)}
            />
            Public
          </label>
        </div>
        <div className={styles.formField}>
          <label className={styles.checkboxLabel} htmlFor="Anonymous">
            <input
              className={styles.checkboxInput}
              type="checkbox"
              id="Anonymous"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            Anonymous
          </label>
        </div>
        <div className={styles.formField}>
          <button className={styles.submitButton} type="submit" id="create">
            Create Story
          </button>
        </div>
      </form>
    </div>
  );
}