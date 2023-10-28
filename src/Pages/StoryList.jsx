import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import useStoryCRUD from "../Components/CRUD";
import PublicStories from "../Components/PublicStories";
import UserStories from "../Components/UserStories";



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
    <div  className="story-list">
     
     <PublicStories 
      readingStory={readingStory}
      setReadingStory={setReadingStory}
      publicStories={publicStories}
      handleReadClick={handleReadClick}
      isAuthenticated={isAuthenticated}
      
     />

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

     />


      {/* <p>
      <Link to="/login">
        {
        isAuthenticated ? '' :
        <p>Go to the login page</p>
        }
      </Link>
      </p> */}

      
    </div>
  );
}
