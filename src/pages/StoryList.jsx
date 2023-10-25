import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import useStoryCRUD from "../Components/CRUD";
import StoryForm from "./UpdateStory";
import styles from './StoryList.module.css';
import  {RiDeleteBin4Fill} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import {MdOutlineExpandMore} from 'react-icons/md';
import {MdOutlinePublic} from 'react-icons/md';


export default function StoryList() {
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
    <div className={styles.storyList}>
      <h2
        style = {{
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: "32px",
          cursor: "pointer",
          fontWeight: "bold",
          color: "#000",
        }}
      >My Stories</h2>
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
                  <RiDeleteBin4Fill />
                  </button>
                  <button
                    className={`${styles.actionButton} ${styles.editButton}`}
                    onClick={() => handleEditClick(story)}
                  >
                  <AiFillEdit />
                  </button>
                  <button
                    className={`${styles.actionButton} ${styles.readButton}`}
                    onClick={() => handleReadClick(story)}
                  >
                    <MdOutlineExpandMore /> 
                  </button>
                  <span>{story.isPublic && <MdOutlinePublic /> }</span>
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
      <h2
      style = {{
        textAlign:"center",
        textTransform: "uppercase",
        fontSize: "24px",
        cursor: "pointer",
        fontWeight: "bold",
        color: "#000",
      }} 
      >Public Stories</h2>
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
              <div className={styles.storyBody}>
                <h3>{story.title}</h3>
                <p>{story.content.slice(0, 100)}...</p>
                <div className={styles.storyActions}>
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
              </div>
            )}
          </li>
        ))}
      </ul>
      <p>
      <Link 
      to="/login"
      style = {{
        textTransform: "uppercase",
        fontSize: "40px",
        cursor: "pointer",
        fontWeight: "bold",
        textAlign: "center",
        color:"#00f",
      }}
      >
        {
        isAuthenticated ? '' :
        <p>Go to the login page</p>
        }
      </Link>
      </p>

      
    </div>
  );
}
