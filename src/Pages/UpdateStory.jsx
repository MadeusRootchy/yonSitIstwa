import React, { useState} from "react";

const UpdateStory = ({ initialValues, onSubmit, onCancel }) => {
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
    <form onSubmit={handleSubmit} className="form-edit">
      <h2>Edit</h2>
      <div className="form-label">
        <label className="form-label" htmlFor="title">
          Title
        </label><br />
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="content">
          Content
        </label>
        <br />
        <textarea
          className="form-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <input
            className="checkbox-input"
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
        <label className="checkbox-label" htmlFor="Public">
          Public
        </label>
      </div>
      <div className="form-field">
        <input
            className="checkbox-input"
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
        <label className="checkbox-label" htmlFor="Anonymous">
           Anonymous
        </label>
      </div>
      <button type="submit" className="btn-save">
        Save Changes
      </button>
      <button type="button" className="btn-cancel" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateStory;