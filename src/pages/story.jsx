import React, { useState } from "react";
import { useAuth } from "./auth";
import useStoryCRUD from "./action";
import StoryForm from "./storyform";
import styles from './userstory.module.css';
import { Link } from "react-router-dom";


export default function UserStories() {
  const { isAuthenticated } = useAuth();
  const storageKey = 'stories';
  const { readStories, updateStory, deleteStory } = useStoryCRUD(storageKey);

  const stories = readStories(); 

  const storedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
  
  const userStories = stories.filter(story =>
    story.author === storedUser.first_name
  );
  const publicStories = stories.filter(story =>
    story.isPublic === true &&  story.author !== storedUser.first_name
  );



  const [editingStory, setEditingStory] = useState(null);
  const [readingStory, setReadingStory] = useState(null);

  const handleEditClick = (story) => {
    setEditingStory(story);
  };

  const handleReadClick = (story) => {
    setReadingStory(story);
  };

  const handleCancelEdit = () => {
    setEditingStory(null);
  };

  return (
    <div>
      <h2>My Stories</h2>
      <ul>
        {!isAuthenticated? '' : userStories.map((story, index) => (
          <li key={index} className={styles.storyContainer}>
            {editingStory === story ? (
              <StoryForm
                initialValues={story}
                onSubmit={(updatedStory) => {
                  updateStory(story.id, updatedStory);
                  setEditingStory(null);
                }}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <h3>{story.title}</h3>
                <p>{story.content.slice(0, 100)}...</p>
                <div className={styles.storyActions}>
                  <button
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={() => deleteStory(story.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={`${styles.actionButton} ${styles.editButton}`}
                    onClick={() => handleEditClick(story)}
                  >
                    Edit
                  </button>
                  <button
                    className={`${styles.actionButton} ${styles.readButton}`}
                    onClick={() => handleReadClick(story)}
                  >
                    Read
                  </button>
                </div>
                {readingStory === story && (
                  <div className={styles.storyDetails}>
                    <p>{story.content}</p>
                    <p>Author: {story.author}</p>
                    <button
                      className={`${styles.actionButton} ${styles.closeButton}`}
                      onClick={() => setReadingStory(null)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
      <h2>All Public Stories</h2>
      <ul>
        {publicStories.map((story, index) => (
          <li key={index} className={styles.storyContainer}>
            {editingStory === story ? (
              <StoryForm
                initialValues={story}
                onSubmit={(updatedStory) => {
                  updateStory(story.id, updatedStory);
                  setEditingStory(null);
                }}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <h3>{story.title}</h3>
                <p>{story.content.slice(0, 100)}...</p>
                <div className={styles.storyActions}>
                  <button  className={`${styles.actionButton} ${styles.deleteButton}`} 
                  onClick={() => deleteStory(story.id)}>Delete</button>
                  <button className={`${styles.actionButton} ${styles.editButton}`}
                   onClick={() => handleEditClick(story)}>Edit</button>
                  <button className={`${styles.actionButton} ${styles.readButton}`} 
                  onClick={() => handleReadClick(story)}>Read</button>

                </div>
                {readingStory === story && ( 
                  <div className={styles.storyDetails}>
                  <p>{story.content}</p>
                    <p>Author: {story.author}</p>
                    
                    <button className={`${styles.actionButton} ${styles.closeButton}`} 
                    onClick={() => setReadingStory(null)}>Close</button>

                    
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
      <h3><Link to="/login">
        {isAuthenticated ? '':"Go to the login page"}</Link></h3>

      
    </div>
  );
}
