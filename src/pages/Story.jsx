import useStoryCRUD from "../Components/Action";
import styles from "./Story.module.css"; 

const Story = ({ storyId }) => {
  const storageKey = 'stories';
  const { readStoriesById } = useStoryCRUD(storageKey);

  const story = readStoriesById(storyId);

  if (!story) {
    return <div className={styles.error}>Story not found</div>;
  }

  return (
    <div className={styles.storyContainer}>
      <p className={styles.content}>{story.content}</p>
      <p className={styles.author}>Author: {story.author}</p>
      <p className={styles.public}>Public: {story.isPublic ? "Yes" : "No"}</p>
      <p className={styles.anonymous}>Anonymous: {story.isAnonymous ? "Yes" : "No"}</p>
    </div>
  );
};

export default Story;
