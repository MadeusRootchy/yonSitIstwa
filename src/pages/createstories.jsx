import React, { useState } from "react";
import { useAuth } from "./auth";
import useStoryCRUD from "./action";
import { useNavigate } from "react-router-dom";
import styles from './createstories.module.css';

export default function CreateStories() {
  const { isAuthenticated, user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const navigate = useNavigate();

  const { createStory } = useStoryCRUD("stories");

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
  };
  return (
    <div className={styles.createStoriesPage}>
      <h4>Create Stories page</h4>
      <form onSubmit={handleSubmit}>
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
        <button className={styles.submitButton} type="submit" id="create">
          Create Story
        </button>
      </form>
    </div>
  );
}