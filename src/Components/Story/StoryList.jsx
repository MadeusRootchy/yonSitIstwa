import React, { useState } from "react";
import { useAuth } from '../Authentication/AuthContext';
import CRUD from '../CRUD/CRUD';
import PublicStories from '../PublicStories';
import UserStories from '../UserStories';



export default function StoryList() {
  const { isAuthenticated } = useAuth();
  const storageKey = 'stories';
  const { readStories, updateStory, deleteStory } = CRUD(storageKey);

  const stories = readStories(); 

  const storedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
  
  const userStories = stories.filter(story =>
    story.author === storedUser.first_name
  );
  const publicStories = stories.filter(story =>
    story.isPublic === true 
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
    <div className="story-list">
      {/* <UserStories 
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
      /> */}

      
      <PublicStories 
          readingStory={readingStory}
          setReadingStory={setReadingStory}
          publicStories={publicStories}
          handleReadClick={handleReadClick}
          isAuthenticated={isAuthenticated}
      />
    </div>
  );
}
