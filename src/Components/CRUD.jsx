import { useState } from "react";

const CRUD = (storageKey) => {
  const [stories, setStories] = useState(() => {
    const storedStories = localStorage.getItem(storageKey);
    return storedStories ? JSON.parse(storedStories) : [];
  });

  const saveStories = (newStories) => {
    localStorage.setItem(storageKey, JSON.stringify(newStories));
    setStories(newStories);
  };

  const createStory = (story) => {
    const newStories = [...stories, story];
    saveStories(newStories);
  };
  const readStories = () => {
    return stories;
  };

  const readStoriesById = (storyId) => {
    return stories;
  };
  const updateStory = (storyId, updatedStory) => {
    const newStories = stories.map(story =>
      story.id === storyId ? updatedStory : story
    );
    saveStories(newStories);
  };

  const deleteStory = (storyId) => {
    const newStories = stories.filter(story => story.id !== storyId);
    saveStories(newStories);
  };

  return {
    createStory,
    readStories,
    updateStory,
    deleteStory,
    readStoriesById,
  };
};

export default CRUD;
