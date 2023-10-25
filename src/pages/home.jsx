import React, { useState } from "react";
import { useColor } from "../Components/useColor";
import styles from './Home.module.css';
import Login from '../Pages/Login';
import StoryList from "./StoryList";
import { useAuth } from "../Components/AuthContext";
import CreateStory from "./CreateStory";

export default function Home() {
  const [color, setColor] = useColor();
  const [selectedColorClass, setSelectedColorClass] = useState(styles.content); // Classe par défaut



  const tab = [
    '#8c978c', '#F73F52', '#FF9000', '#FBD400', '#9ED763', '#6730EC','#815A8F',
    '#663399', '#FF69B4', '#00CED1', '#FF1493', '#00FF00', '#0000FF', '#FFFF00',
    '#8B4513'
  ];


  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <h2 className={styles.titre}>RootStories</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elitamet consectetur adipisicing elit.</p>
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
      </div>
      <CreateStory />
      <StoryList />
    </div>
  );
}
