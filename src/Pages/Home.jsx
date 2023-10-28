import React, { useState } from "react";
import StoryList from "./StoryList";
import CreateStory from "./CreateStory";

export default function Home() {

  return (
    <div className="home">
      <CreateStory />
      <StoryList />

    
    </div>
  );
}
