import React, { useState } from "react";
import { motion } from "framer-motion";
import { useColor } from "../coponents/color";
import styles from './home.module.css';

export default function Home() {
  const [color, setColor] = useColor();
  const [selectedColorClass, setSelectedColorClass] = useState(styles.content); // Classe par défaut

  const animationVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };
  
  const tab = [
    '#8c978c', '#F73F52', '#FF9000', '#FBD400', '#9ED763', '#6730EC','#815A8F',
    '#663399', '#FF69B4', '#00CED1', '#FF1493', '#00FF00', '#0000FF', '#FFFF00',
    '#8B4513'
  ];

  const handleColorChange = (event) => {
    const selectedClass = event.target.value;
    setSelectedColorClass(selectedClass);
  };

  return (
    <>
      <div style={{ backgroundColor: color, minHeight: '100vh' }}>
        <h2 className={styles.animationText}>Here you can share your story, enjoy...</h2>
        <div className={styles.main}>
            <div className={selectedColorClass}>
              <label htmlFor="color"> Themes</label>
              <select
                value={color}
                id="color"
                onChange={(e) => setColor(e.target.value)}
              >
                {tab.map((el, index) => (
                  <option key={index} value={el} style={{ backgroundColor: el }}
                  >
                    {el}
                  </option>
                ))}
              </select>
              <div
                className={styles.box}
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              ></div>
            </div>
          </div>
      </div>

     
    </>
  );
}
