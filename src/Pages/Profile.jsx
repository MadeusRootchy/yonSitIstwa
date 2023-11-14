import React, { useState } from "react";
import { useAuth } from "../Components/Authentication/AuthContext";
import CRUD from "../Components/CRUD/CRUD";
import UserStories from "../Components/UserStories";


export default function Profile () {

    const { isAuthenticated } = useAuth();
    const storageKey = 'stories';
    const { readStories, updateStory, deleteStory } = CRUD(storageKey);
  
    const stories = readStories(); 
  
    const storedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
    
    const userStories = stories.filter(story =>
      story.author === storedUser.first_name
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
        <div className="prof">
        <h1>Profile</h1>
        <section className="all-stories">
            <UserStories 
          updateStory={updateStory}
          deleteStory={deleteStory}
          isAuthenticated={isAuthenticated}
          userStories={userStories}
          handleEditClick={handleEditClick}
          handleCancelEdit={handleCancelEdit}
          handleReadClick={handleReadClick}
          editingStory={editingStory}
          setEditingStory={setEditingStory}
          readingStory={readingStory}
          setReadingStory={setReadingStory}
            />
          </section>
        </div>
    )
}