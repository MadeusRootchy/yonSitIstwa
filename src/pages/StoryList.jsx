import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import useStoryCRUD from "../Components/CRUD";
import StoryForm from "./UpdateStory";
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
    <div  className="story-list">
      <div className="my-stories">
      <h2>My Stories</h2>
        {!isAuthenticated? '' : userStories.map((story, index) => (
          <div key={index} >
            {
            editingStory === story ? (
              <StoryForm
                initialValues={story}
                onSubmit={(updatedStory) => {
                  updateStory(story.id, updatedStory);
                  setEditingStory(null);
                }}
                onCancel={handleCancelEdit}
              />
            ) : (
              <div className="story-snippet">
                <h3>{story.title}</h3>
                <p>{story.content.slice(0, 100)}...</p>
                <div  className="story-actions">
                  <button
                    onClick={() => deleteStory(story.id)}
                  >
                  <RiDeleteBin4Fill />
                  </button>
                  <button
                    onClick={() => handleEditClick(story)}
                  >
                  <AiFillEdit />
                  </button>
                  <button
                    onClick={() => handleReadClick(story)}
                  >
                    <MdOutlineExpandMore /> 
                  </button>
                  <span>{story.isPublic && <MdOutlinePublic /> }</span>
                </div>
                {/* --- */}
                {
                readingStory === story && (
                  <div  className="story-details">
                    <p>{story.content}</p>
                    <h5>Author : {story.author}</h5><br />
                    <button
                      onClick={() => setReadingStory(null)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="public-stories">
      <h2>Public Stories</h2>
        {publicStories.map((story, index) => (
          <div key={index}>
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
              <div className="story-snippet">
                <h3>{story.title}</h3>
                <p>{story.content.slice(0, 100)}...</p>
                <div  className="story-actions">
                  <button  
                  onClick={() => handleReadClick(story)}>Read</button>

                </div>
                {readingStory === story && ( 
                  <div  className="story-details">
                  <p>{story.content}</p>
                    <p>Author : {story.author}</p>
                    
                    <button 
                    onClick={() => setReadingStory(null)}>Close</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <p>
      <Link to="/login">
        {
        isAuthenticated ? '' :
        <p>Go to the login page</p>
        }
      </Link>
      </p>

      
    </div>
  );
}
