import React, { useState} from "react";
import styles from './storyform.module.css'

const StoryForm = ({ initialValues, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [isPublic, setIsPublic] = useState(initialValues.isPublic);
  const [isAnonymous, setIsAnonymous] = useState(initialValues.isAnonymous);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStory = {
      ...initialValues,
      title,
      content,
      isPublic,
      isAnonymous,
    };

    onSubmit(updatedStory);
  };

 
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor="title">
          Title:
        </label>
        <input
          className={styles.formInput}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor="content">
          Content:
        </label>
        <textarea
          className={styles.formTextarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.checkboxLabel} htmlFor="Public">
          <input
            className={styles.checkboxInput}
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          Public
        </label>
      </div>
      <div className={styles.formField}>
        <label className={styles.checkboxLabel} htmlFor="Anonymous">
          <input
            className={styles.checkboxInput}
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          Anonymous
        </label>
      </div>
      <button type="submit" className={styles.submitButton}>
        Save Changes
      </button>
      <button type="button" className={styles.cancelButton} onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default StoryForm;