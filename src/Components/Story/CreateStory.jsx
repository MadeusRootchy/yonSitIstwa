import React, { useState } from "react";
import { useAuth } from '../Authentication/AuthContext';
import CRUD from '../CRUD/CRUD';
import EditStory from './EditStory';

export default function CreateStory() {
  const { isAuthenticated } = useAuth();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("")
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const { createStory } = CRUD("stories");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      console.log("Not Authorized To Create Stories");
      return;
    }
    
    const storedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
    const newStory = {
      date: Date.now(),
      id:date,
      title,
      content,
      isPublic,
      isAnonymous,
      author: !isAnonymous ? storedUser.first_name : "Anonymous",
    };

    createStory(newStory);

    setTitle("");
    setContent("");
    setDate("")
    setIsPublic(true);
    setIsAnonymous(false);
  }

  return (
    <div className="new-story">
      <EditStory 
      pageTitle={'New Story'}
      handleSubmit={handleSubmit}
      date={date}
      setDate={setDate}
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